Thank you for downloading CSGO Alt-Tab manager, by /u/anonymous853!

It plays whatever tone/song you have in the /Custom Sounds/primary song folder. To change it, all you have to do is set the name as song.mp3 if you want to customize it. This is a great resource for tones: http://soundbible.com/tags-bomb.html

~~~~~~~~~~~~~~~~~~~~~~~~~~~
INSTALL INSTRUCTIONS

1. If you haven't already, create a file called gamestate_integration_hud.cfg in /common/Counter-Strike Global Offensive/csgo/cfg with the contents that are listed below. To do that just create a file with notepad and rename it the correct filename, then save it as type all files.

2. Download this repository (top right corner).

3. Install node.js from here: https://nodejs.org/en/download/.  Other than running the .exe file, you don't have to do anything else.

4. Open the start.bat file folder.

If you run into any problems, shoot me a message and I'll see what I can do.

Also if you run more instance at a time or else it wont work.
~~~~~~~~~~~~~~~~~~~~~~~~~~~

--gamestate_integration_hud.cfg contents:--

"CSGO HUD"
{
 "uri" "http://127.0.0.1:3000"
 "timeout" "5.0"
 "buffer"  "0.1"
 "throttle" "0.1"
 "heartbeat" "60.0"
 "data"
 {
   "provider"            "1"
   "map"                 "1"
   "round"               "1"
   "player_id"           "1"
   "player_state"        "1"
   "player_weapons"      "1"
   "player_match_stats"  "1"
   "allplayers_match_stats"  "1"
   "allplayers_id"       "1"
   "allplayers_state"    "1"
 }
}
