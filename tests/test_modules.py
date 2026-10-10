"""Unit tests for the pure parts of the backend. Run:  python3 -I -m unittest discover -s tests -p 'test_*.py'"""
import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "py_modules"))

import fp_errors  # noqa: E402
import fp_util  # noqa: E402

GOOD_FIGURE = {"skin": "#F3C096", "hair": "#2b2118", "shirt": "#ef5b5b", "pants": "#374151", "shoes": "#f4f4f4",
            "hairStyle": 2, "eyes": 1, "brows": 0, "mouth": 0, "glasses": False, "stache": False, "blush": True,
            "head": 1.0, "hat": 0, "acc": 0}


class Util(unittest.TestCase):
    def test_ids(self):
        self.assertTrue(fp_util.valid_steamid("76561197960265728"))
        self.assertFalse(fp_util.valid_steamid("7656119796026572"))
        self.assertFalse(fp_util.valid_steamid(None))
        self.assertEqual(fp_util.steamid_to_account(fp_util.account_to_steamid(12345)), 12345)

    def test_vdf_and_loginusers(self):
        text = '"users" { "76561197960265801" { "PersonaName" "A" "MostRecent" "1" "Timestamp" "5" } "bad" { } }'
        users = fp_util.parse_loginusers(text)
        self.assertEqual([u["steamid"] for u in users], ["76561197960265801"])
        self.assertTrue(users[0]["recent"])

    def test_friends_from_steams_own_files(self):
        text = ('"UserLocalConfigStore" { "friends" { "1" { "name" "Ann" "avatar" "x" } "0" { "name" "Zero" } '
                '"2147483647" { "name" "Big" } "PersonaName" "Me" "abc" { "name" "no" } } }')
        named = fp_util.parse_localconfig_friends_named(text)
        self.assertEqual(named, {fp_util.account_to_steamid(1): "Ann", fp_util.account_to_steamid(2147483647): "Big"})
        self.assertEqual(fp_util.parse_localconfig_friends_named("garbage {{"), {})

    def test_server_url(self):
        self.assertEqual(fp_util.clean_server_url(" https://a.b.workers.dev/ "), "https://a.b.workers.dev")
        self.assertEqual(fp_util.clean_server_url("http://localhost:8799"), "http://localhost:8799")
        for bad in ("javascript:alert(1)", "http://evil.example", "ftp://x.y", "", None, "https://a b.dev"):
            self.assertEqual(fp_util.clean_server_url(bad), "", bad)

    def test_friends_hash_ignores_order_and_duplicates(self):
        a = fp_util.friends_hash(["2", "1", "2"])
        self.assertEqual(a, fp_util.friends_hash(["1", "2"]))
        self.assertNotEqual(a, fp_util.friends_hash(["1", "3"]))

    def test_figure_validation(self):
        ok = fp_util.clean_figure(GOOD_FIGURE)
        self.assertEqual(ok["skin"], "#f3c096")
        self.assertEqual(ok["acc"], 0)
        no_acc = dict(GOOD_FIGURE); del no_acc["acc"]
        self.assertEqual(fp_util.clean_figure(no_acc)["acc"], 0)  # older saved characters have no accessory
        for key, bad in (("skin", "red"), ("hairStyle", 9), ("eyes", -1), ("hat", 28), ("acc", 16), ("tee", 33), ("aura", 9), ("head", 2.0), ("mouth", True)):
            m = dict(GOOD_FIGURE); m[key] = bad
            self.assertIsNone(fp_util.clean_figure(m), key)
        self.assertIsNone(fp_util.clean_figure("nope"))

    def test_text_cleaning(self):
        self.assertEqual(fp_util.clean_text("a\x00b\x1fc", 10), "abc")
        self.assertEqual(len(fp_util.clean_text("x" * 100, 5)), 5)
        self.assertEqual(fp_util.clean_text(None), "")


class Errors(unittest.TestCase):
    def test_each_failure_says_what_to_do(self):
        e = fp_errors.friendly_error
        self.assertIn("Settings > Online", e("server", "", 401))
        self.assertIn("slow down", e("server", "Slow down a little.", 429))
        self.assertIn("server address", e("server", "curl: (6) Could not resolve host", 0))
        self.assertIn("not a Friend Plaza server", e("server", "The server sent something that is not JSON (HTTP 200)", 200))
        self.assertIn("Signing in did not finish", e("login", "", 0))
        self.assertEqual(e("server", "Not enough points.", 402), "Not enough points.")   # the server's own words are kept


if __name__ == "__main__":
    unittest.main()
