#!/usr/bin/env python3
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import os
import tempfile
import unittest
from contextlib import contextmanager

from antlir.compiler.requires_provides import ProvidesDirectory, ProvidesFile
from antlir.tests.layer_resource import layer_resource_subvol
from antlir.tests.subvol_helpers import pop_path, render_subvol

from ..common import LayerOpts


# Re-export for legacy reasons
pop_path = pop_path
render_subvol = render_subvol

DEFAULT_STAT_OPTS = ["--user=root", "--group=root", "--mode=0755"]
DUMMY_LAYER_OPTS = LayerOpts(
    layer_target="fake target",  # Only used by error messages
    build_appliance=None,
    # For a handful of tests, this must be a boolean value so the layer
    # emits it it into /.meta, but the value is not important.
    artifacts_may_require_repo=True,
    target_to_path=None,
    subvolumes_dir=None,
    rpm_installer=None,
    version_set_override=None,
    rpm_repo_snapshot=None,
    allowed_host_mount_targets=[],
)


# This has to be a function because using `importlib` while loading a module
# results in incorrect behavior (I did not debug the specifics).
def get_dummy_layer_opts_ba():
    return DUMMY_LAYER_OPTS._replace(
        build_appliance=layer_resource_subvol(
            __package__, "test-build-appliance"
        )
    )


def populate_temp_filesystem(img_path):
    "Matching Provides are generated by _temp_filesystem_provides"

    def p(img_rel_path):
        return os.path.join(img_path, img_rel_path)

    os.makedirs(p("a/b/c"))
    os.makedirs(p("a/d"))

    for filepath in ["a/E", "a/d/F", "a/b/c/G"]:
        with open(p(filepath), "w") as f:
            f.write("Hello, " + filepath)


@contextmanager
def temp_filesystem():
    with tempfile.TemporaryDirectory() as td_path:
        populate_temp_filesystem(td_path)
        yield td_path


def temp_filesystem_provides(p=""):
    "Captures what is provided by _temp_filesystem, if installed at `p` "
    "inside the image."
    return {
        ProvidesDirectory(path=f"{p}/a"),
        ProvidesDirectory(path=f"{p}/a/b"),
        ProvidesDirectory(path=f"{p}/a/b/c"),
        ProvidesDirectory(path=f"{p}/a/d"),
        ProvidesFile(path=f"{p}/a/E"),
        ProvidesFile(path=f"{p}/a/d/F"),
        ProvidesFile(path=f"{p}/a/b/c/G"),
    }


class BaseItemTestCase(unittest.TestCase):
    def setUp(self):  # More output for easier debugging
        unittest.util._MAX_LENGTH = 12345
        self.maxDiff = 12345

    def _check_item(self, i, provides, requires):
        self.assertEqual(provides, set(i.provides()))
        self.assertEqual(requires, set(i.requires()))