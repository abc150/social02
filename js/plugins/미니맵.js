This plugin will display a  mini-map for your game.

Custom Name Location - This parameter lets you define the
location of the minimaps name display.

Possible locations:
ABOVE, TOP, MID, BOTTOM, BELOW, ABOVERIGHT, TOPRIGHT, MIDRIGHT,
BOTTOMRIGHT, BELOWRIGHT, ABOVELEFT, TOPLEFT, MIDLEFT,
BOTTOMLEFT, BELOWLEFT

NOTE TAGS
In map properties, if you add <mm_areaname: Name> to the notes (Where
Name is the name of the area), you'll set the display name for the
mini map.

If you want an event to be displayed on the minimap, you can type
this in the events note tag.
<mm_setColor: rgba(0, 255, 0, 0.8)>
Alternatively, you can use rgb and hex as a color source as well.

PLUGIN COMMANDS
upp_minimap - set values to show / hide to hide or show the minimap.
|| Example:
||  upp_minimap show

upp_m_useCM - This decides rather or not to use the default
				Collision Mapping or strictly use region drawing.
|| Example:
||  upp_m_useCM true

|| Example:
||  upp_m_hideEventDrawing 1

upp_m_showplayer - set values to true / false to hide or show the player.
|| Example:
||  upp_m_showplayer true

upp_m_showEvents - set values to true / false to hide or show the events.
|| Example:
||  upp_m_showEvents true

upp_m_border - set values to true / false to hide or show the border
|| Example:
||  upp_m_border true

upp_m_name - Setting this to true/false will show or hide the minimap
display name, however, using the set option, you can change the area
name display.
|| Example:
||  upp_m_border true
||  upp_m_border set Map Name

upp_m_setScale - sets the minimap size.
|| Example:
||  upp_m_setScale 5

upp_m_setZoom - sets the minimap zoom size.
|| Example:
||  upp_m_setZoom 10

upp_m_changeImpassColor - Changes the impassable tile color.
|| Example:
||  upp_m_changeImpassColor #11aaff
||  upp_m_changeImpassColor rgb(25, 150, 255)
||  upp_m_changeImpassColor rgba(25, 150, 255, 0.5);

upp_m_changePassColor - Changes the passable tile color.
|| Example:
||  upp_m_changePassColor #11aaff
||  upp_m_changePassColor rgb(25, 150, 255)
||  upp_m_changePassColor rgba(25, 150, 255, 0.5);

upp_m_relocate - Relocates the minimap.
|| Example:
||  upp_m_relocate 24 24

upp_m_namePosition - Changes where the minimap name is drawn.
|| Example:
||  upp_m_namePosition TOP

upp_m_nameOffset - Changes the map names X/Y Offset.
|| Example:
||  upp_m_nameOffset 24 24
 
upp_m_nameBGColor - Changes the BG color of the name window.
|| Example:
||  upp_m_nameBGColor #11aaff;
||  upp_m_nameBGColor rgb(25, 150, 255);
||  upp_m_nameBGColor rgba(25, 150, 255, 0.5);
 
upp_m_setRegion - Changes the color of the specified region ID.
|| Example:
||  upp_m_setRegion 1 color #11aaff;
||  upp_m_setRegion 1 color rgb(25, 150, 255);
||  upp_m_setRegion 1 color rgba(25, 150, 255, 0.5);

upp_m_regionClear - you can clear a range of regions, clear a
					  single region, or clear all the regions to
					  stop them from being drawn on the minimap.
|| Example:
||  upp_m_regionClear single 1
||  upp_m_regionClear range 1 4
||  upp_m_regionClear all

upp_m_hideEventDrawing - Hides the event from the minimap by setting
						   its color to rgba(0, 0, 0, 0).
|| Example:
||  upp_m_hideEventDrawing 1


upp_m_playerCircle - Setting this to true/false will set if the player
					   icon is a circle or a square.
|| Example:
||  upp_m_playerCircle true

upp_m_eventCircle - Same thing as upp_m_playerCircle, only with events.

upp_m_setBeacon - Use this to turn an event into a blinking beacon.
                  Order: upp_m_setBeacon eventId show expand_speed
                  start_opacity opacity_fade_speed delay
|| Example:
||  upp_m_setBeacon 2 true 0.2 255 4 60

upp_m_changePlayerColor - Changes the color of the player indicator.
|| Example:
||  upp_m_changePlayerColor rgba(150, 255, 255, 0.5)

upp_m_changeEventColor - Changes the color of the event.
|| Example:
||  upp_m_changeEventColor 1 rgba(150, 255, 255, 0.5)

REGION COLORS:
By default, the region colors are set to NONE which makes the map
not render them. Simply change NONE to a hex color, rgb, or rgba.
Example: rgba(0, 0, 0, 0.5)

There are a total of 255 regions, so be sure to use ones that you
aren't already using for other scripts, or at least find a way to
make them co-exist if you want to add a little extra detail to your
mini-maps.