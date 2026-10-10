# Friend Plaza - everything it does

## The plaza
- A 3D plaza (dark Steam look) where you and the people who use Friend Plaza stand as little 3D characters.
- Only people who use the plugin are shown: your Steam friends who have it, and (optional) other plugin users. Nobody
  else, and there are no made-up characters for friends who don't have it.
- One coloured pad per game that people are playing right now (up to 13, smaller when there are many), with the game's art and a count of the players.
  Players stand on the pad of their game, with a status ring (green in-game, blue online, amber away) and an IN-GAME tag.
- Click or pick a person for a hover card (name, "In-Game: ...", friend or plugin user).
- **Walk**: move your own character with the stick, D-pad (diagonals work) or keyboard. The camera follows you.
- **Zoom out / Zoom in** (0.75x to 2.6x). Zoomed in, the camera follows the card or person you pick.
- **Friend Store** building (solid, you walk around it): walk to the door and press A, or pick its sign.
- A small feed shows what just happened (waves, notes, finished games, new stamps).
- Quality Auto lowers resolution and crowd size if the Deck can't keep up, and raises them again when it can.

## Your character and the store
- Full character editor: hair style and colour, skin, eyes, brows, mouth, head size, glasses, moustache, blush,
  shirt, pants, shoes, hat and accessory. Live 3D preview.
- Shop with 120+ items in 8 categories, bought with points and tried on before buying: 32 graphic tees (pixel parodies
  of well known games), 20 flags you carry on your back (countries, pirate, racing, rainbow ...), 20 hats, 15 pieces of
  gear (chain, tie, medal, lei, jetpack, katana, shield, guitar ...), 14 special hair colours, 8 face paints, 6 shoe
  styles and 8 auras (a glowing ring under your feet, one is rainbow).
- Stamps unlock 7 more hats (first wave, 3/7/30 day streaks, first gift, 5 friends greeted, first dance).
- Your character is saved on the server; friends who use the plugin see it.

## Interacting (friends who use the plugin)
- Wave, heart, high five, dance together: their character runs over to yours and greets.
- Gifts (hats you own), and preset notes (12 messages) that wait in your inbox.
- Invite to a game, block and report (five preset reasons) from the action bar.
- Profile and Game buttons open Steam pages.
- Nothing happens between characters on its own; every greeting is a real action by a real person.

## Minigames (turn-based, checked by the server)
- Tic-Tac-Toe, Connect Four, Rock Paper Scissors (best of 3), Blackjack 21 (a duel, best of 3 hands).
- Both players' characters stand beside the board and react (blue arrow = whose move, winner dances).
- Win 10 points, draw 5, loss 3 (giving up 0). At most 100 points a day and 5 rewarded games a day per friend.
- Fast: the screen asks a tiny "did it change?" question every 1.5 s while you wait for the other player.

## Setup, settings, help
- Server address is built in (server.txt / Settings can override it). First-run guide: server, Steam sign-in, first character.
- No Steam API key and no Steam account password are needed. The plugin reads Steam's own friend-list file only to
  tell the server who your friends are; the server reads each player's public Steam page for name, avatar and game.
- Settings screen: server, sign in/out, delete my data, who you see, visibility, graphics quality, blocked players,
  Check setup, Save diagnostics, run the guide again.
- Errors say what to do next. Diagnostics file (no secrets) for support. Screens that crash show a way out.

## The server (Cloudflare Worker + free D1 database)
- Sign in with Steam (official OpenID). Friends see each other only if both list each other.
- Presence, characters, events, games, points, shop, stamps, blocks, reports.
- Safety: per-account request limit, report limit, automatic deletion of old data and of accounts unused for 90 days.
- Test bots (hidden unless the server is in test mode) that sign in, appear in the plaza, accept invites and play.
- `STRANGER_INTERACT` switch for the future "plugin users only" mode.

## Tests
- Python unit tests, TypeScript tests for the plaza rules, a backend end-to-end test; server: 146 checks,
  profile-page parsing, bot rules, and a full play-through against the bots.
