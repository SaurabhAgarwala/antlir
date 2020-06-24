#!/usr/bin/env python3
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import unittest

from unittest import mock

from fs_image.nspawn_in_subvol.args import new_nspawn_opts

from .. import rpm as rpm_plugins


class RpmPluginsTestCase(unittest.TestCase):

    # This fully mocked because `test-run` does the integration testing.
    @mock.patch.object(
        rpm_plugins, 'yum_dnf_versionlock_nspawn_plugin',
        mock.Mock(side_effect=lambda x: ('test_vl', x)),
    )
    @mock.patch.object(
        rpm_plugins, 'repo_servers_nspawn_plugin',
        mock.Mock(side_effect=lambda x: ('test_rs', x)),
    )
    def test_rpm_nspawn_plugins(self):
        mock_subvol = mock.Mock(spec=['canonicalize_path'])
        mock_subvol.canonicalize_path = mock.Mock(
            side_effect=lambda x: '_' + x,
        )
        self.assertEqual(
            (
                ('test_vl', {'_a': 'vla', '_c': 'vlc'}),
                ('test_rs', {'_a', '_b', '_c'}),
            ),
            rpm_plugins.rpm_nspawn_plugins(
                opts=new_nspawn_opts(cmd=[], layer=mock_subvol),
                serve_rpm_snapshots=('a', 'b', 'c'),
                snapshots_and_versionlocks=[('a', 'vla'), ('c', 'vlc')],
            )
        )