/* eslint-disable linebreak-style */
/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="motion_movesteps" id="motion_movesteps">' +
      '<value name="STEPS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnright" id="motion_turnright">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_turnleft" id="motion_turnleft">' +
      '<value name="DEGREES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">15</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointindirection" id="motion_pointindirection">' +
      '<value name="DIRECTION">' +
        '<shadow type="math_angle">' +
          '<field name="NUM">90</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_pointtowards" id="motion_pointtowards">' +
      '<value name="TOWARDS">' +
        '<shadow type="motion_pointtowards_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_gotoxy" id="motion_gotoxy">' +
      '<value name="X">' +
        '<shadow id="movex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="movey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_goto" id="motion_goto">' +
      '<value name="TO">' +
        '<shadow type="motion_goto_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glidesecstoxy" id="motion_glidesecstoxy">' +
      '<value name="SECS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="X">' +
        '<shadow id="glidex" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="Y">' +
        '<shadow id="glidey" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_glideto" id="motion_glideto">' +
      '<value name="SECS">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="motion_glideto_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_changexby" id="motion_changexby">' +
      '<value name="DX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_setx" id="motion_setx">' +
      '<value name="X">' +
        '<shadow id="setx" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_changeyby" id="motion_changeyby">' +
      '<value name="DY">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_sety" id="motion_sety">' +
      '<value name="Y">' +
        '<shadow id="sety" type="math_number">' +
          '<field name="NUM">0</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="motion_ifonedgebounce" id="motion_ifonedgebounce"></block>' +
    '<block type="motion_setrotationstyle" id="motion_setrotationstyle"></block>' +
    '<block type="motion_xposition" id="motion_xposition"></block>' +
    '<block type="motion_yposition" id="motion_yposition"></block>' +
    '<block type="motion_direction" id="motion_direction"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">' +
    '<block type="looks_show" id="looks_show"></block>' +
    '<block type="looks_hide" id="looks_hide"></block>' +
    '<block type="looks_switchcostumeto" id="looks_switchcostumeto">' +
      '<value name="COSTUME">' +
        '<shadow type="looks_costume"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_nextcostume" id="looks_nextcostume"></block>' +
    '<block type="looks_nextbackdrop" id="looks_nextbackdrop"></block>' +
    '<block type="looks_switchbackdropto" id="looks_switchbackdropto">' +
      '<value name="BACKDROP">' +
        '<shadow type="looks_backdrops"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_switchbackdroptoandwait" id="looks_switchbackdroptoandwait">' +
      '<value name="BACKDROP">' +
        '<shadow type="looks_backdrops"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_changeeffectby" id="looks_changeeffectby">' +
      '<value name="CHANGE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_seteffectto" id="looks_seteffectto">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_cleargraphiceffects" id="looks_cleargraphiceffects"></block>' +
    '<block type="looks_changesizeby" id="looks_changesizeby">' +
      '<value name="CHANGE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_setsizeto" id="looks_setsizeto">' +
      '<value name="SIZE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_gotofrontback" id="looks_gotofrontback"></block>' +
    '<block type="looks_goforwardbackwardlayers" id="looks_goforwardbackwardlayers">' +
      '<value name="NUM">' +
        '<shadow type="math_integer">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="looks_costumenumbername" id="looks_costumenumbername"></block>' +
    '<block type="looks_backdropnumbername" id="looks_backdropnumbername"></block>' +
    '<block type="looks_size" id="looks_size"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">' +
    '<block type="sound_play" id="sound_play">' +
      '<value name="SOUND_MENU">' +
        '<shadow type="sound_sounds_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_playuntildone" id="sound_playuntildone">' +
      '<value name="SOUND_MENU">' +
        '<shadow type="sound_sounds_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_stopallsounds" id="sound_stopallsounds"></block>' +
    '<block type="sound_changeeffectby" id="sound_changeeffectby">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_seteffectto" id="sound_seteffectto">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_cleareffects" id="sound_cleareffects"></block>' +
    '<block type="sound_changevolumeby" id="sound_changevolumeby">' +
      '<value name="VOLUME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">-10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_setvolumeto" id="sound_setvolumeto">' +
      '<value name="VOLUME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">100</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sound_volume" id="sound_volume"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>' +
    '<block type="event_whenkeypressed" id="event_whenkeypressed">' +
    '</block>' +
    '<block type="event_whenthisspriteclicked" id="event_whenthisspriteclicked"></block>' +
    '<block type="event_whenbackdropswitchesto" id="event_whenbackdropswitchesto">' +
    '</block>' +
    '<block type="event_whengreaterthan" id="event_whengreaterthan">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_whenbroadcastreceived" id="event_whenbroadcastreceived">' +
    '</block>' +
    '<block type="event_broadcast" id="event_broadcast">' +
      '<value name="BROADCAST_INPUT">' +
        '<shadow type="event_broadcast_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_broadcastandwait" id="event_broadcastandwait">' +
      '<value name="BROADCAST_INPUT">' +
        '<shadow type="event_broadcast_menu"></shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">' +
    '<block type="control_wait" id="control_wait">' +
      '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_repeat" id="control_repeat">' +
      '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_forever" id="control_forever"></block>' +
    '<block type="control_if" id="control_if"></block>' +
    '<block type="control_if_else" id="control_if_else"></block>' +
    '<block type="control_wait_until" id="control_wait_until"></block>' +
    '<block type="control_repeat_until" id="control_repeat_until"></block>' +
    '<block type="control_stop" id="control_stop"></block>' +
    '<block type="control_start_as_clone" id="control_start_as_clone"></block>' +
    '<block type="control_create_clone_of" id="control_create_clone_of">' +
      '<value name="CLONE_OPTION">' +
        '<shadow type="control_create_clone_of_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_delete_this_clone" id="control_delete_this_clone"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">' +
    '<block type="sensing_touchingobject" id="sensing_touchingobject">' +
      '<value name="TOUCHINGOBJECTMENU">' +
        '<shadow type="sensing_touchingobjectmenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_touchingcolor" id="sensing_touchingcolor">' +
      '<value name="COLOR">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_coloristouchingcolor" id="sensing_coloristouchingcolor">' +
      '<value name="COLOR">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
      '<value name="COLOR2">' +
        '<shadow type="colour_picker"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_distanceto" id="sensing_distanceto">' +
      '<value name="DISTANCETOMENU">' +
        '<shadow type="sensing_distancetomenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_keypressed" id="sensing_keypressed">' +
        '<value name="KEY_OPTION">' +
          '<shadow type="sensing_keyoptions"></shadow>' +
        '</value>' +
    '</block>' +
    '<block type="sensing_mousedown" id="sensing_mousedown"></block>' +
    '<block type="sensing_mousex" id="sensing_mousex"></block>' +
    '<block type="sensing_mousey" id="sensing_mousey"></block>' +
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>' +
    '<block type="sensing_loudness" id="sensing_loudness"></block>' +
    '<block type="sensing_timer" id="sensing_timer"></block>' +
    '<block type="sensing_resettimer" id="sensing_resettimer"></block>' +
    '<block type="sensing_of" id="sensing_of">' +
      '<value name="OBJECT">' +
        '<shadow type="sensing_of_object_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_current" id="sensing_current"></block>' +
    '<block type="sensing_dayssince2000" id="sensing_dayssince2000"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">' +
    '<block type="operator_add" id="operator_add">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_subtract" id="operator_subtract">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_multiply" id="operator_multiply">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_divide" id="operator_divide">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_random" id="operator_random">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_lt" id="operator_lt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_equals" id="operator_equals">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_gt" id="operator_gt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_and" id="operator_and"></block>' +
    '<block type="operator_or" id="operator_or"></block>' +
    '<block type="operator_not" id="operator_not"></block>' +
    '<block type="operator_join" id="operator_join">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_letter_of" id="operator_letter_of">' +
      '<value name="LETTER">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_length" id="operator_length">' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_contains" id="operator_contains">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mod" id="operator_mod">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_round" id="operator_round">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mathop" id="operator_mathop">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="Display Control" id="playspotDisplay" colour="#17C1CF" secondaryColour="#1D7B83" ' +
  'showStatusButton="false">' +
    '<block type="playspotDisplay_image" id="playspotDisplay_image"></block>' +
    '<block type="playspotDisplay_animateImage" id="playspotDisplay_animateImage"></block>' +
    '<block type="playspotDisplay_fillImage" id="display_fillImage">' +
      '<value name="BEGIN">' +
        '<shadow type="text">' +
          '<field name="TEXT">begin</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="END">' +
      '<shadow type="text">' +
        '<field name="TEXT">end</field>' +
      '</shadow>' +
    '</value>' +
    '<value name="RED">' +
      '<shadow type="text">' +
        '<field name="TEXT">red</field>' +
      '</shadow>' +
    '</value>' +
    '<value name="GREEN">' +
      '<shadow type="text">' +
        '<field name="TEXT">green</field>' +
      '</shadow>' +
    '</value>' +
    '<value name="BLUE">' +
      '<shadow type="text">' +
        '<field name="TEXT">blue</field>' +
      '</shadow>' +
    '</value>' +
    '</block>' +
    '<block type="playspotDisplay_displayHistogram" id="playspotDisplay_displayHistogram">' +
    '<value name="RED">' +
      '<shadow type="text">' +
        '<field name="TEXT">red</field>' +
      '</shadow>' +
    '</value>' +
    '<value name="GREEN">' +
      '<shadow type="text">' +
        '<field name="TEXT">green</field>' +
      '</shadow>' +
    '</value>' +
    '<value name="BLUE">' +
      '<shadow type="text">' +
        '<field name="TEXT">blue</field>' +
      '</shadow>' +
    '</value>' +
    '</block>' +
  '</category>' +
  '<block type="virtualsat_stopEvent">' +
        '<value name="SATELLITE">' +
          '<shadow type="text">' +
            '<field name="TEXT">satellite</field>' +
          '</shadow>' +
        '</value>' +
        '<value name="SATELLITE">' +
          '<shadow type="text">' +
            '<field name="TEXT">satellite</field>' +
          '</shadow>' +
        '</value>' +
      '</block>' +
      '<category name="Lights and Sounds" id="lights" colour="#3399ff" secondaryColour="#1556E1" ' +
      'showStatusButton="false">' +
          '<block type="lights_sendSequence">' +
              '<value name="VALUE">' +
                  '<shadow type="text">' +
                      '<field name="TEXT">sequence</field>' +
                  '</shadow>' +
              '</value>' +
              '<value name="SATELLITE">' +
                  '<shadow type="text">' +
                      '<field name="TEXT">Satellite #</field>' +
                  '</shadow>' +
              '</value>' +
          '</block>' +
            '<block type="sound_playSoundFromMQTT">' +
            '<value name="SOUND">' +
            '<shadow type="text">' +
                '<field name="TEXT">Sound</field>' +
            '</shadow>' +
            '</value>' +
            '<value name="SATELLITE">' +
            '<shadow type="text">' +
                '<field name="TEXT">satellite</field>' +
            '</shadow>' +
            '</value>' +
        '</block>' +
        '<block type="sound_setVolume" id="sound_setVolume">' +
        '<value name="SATELLITE">' +
            '<shadow type="text">' +
            '<field name="TEXT">satellite</field>' +
            '</shadow>' +
        '</value>' +
        '</block>' +
        '<block type="virtualsat_stopEvent">' +
            '<value name="SATELLITE">' +
            '<shadow type="text">' +
                '<field name="TEXT">satellite</field>' +
            '</shadow>' +
            '</value>' +
            '<value name="SATELLITE">' +
            '<shadow type="text">' +
                '<field name="TEXT">satellite</field>' +
            '</shadow>' +
            '</value>' +
        '</block>' +
        '<block type="virtualsat_loadGameFile">' +
          '<value name="GAMENAME">' +
            '<shadow type="text">' +
              '<field name="TEXT">file name</field>' +
            '</shadow>' +
          '</value>' +
        '</block>' +
        '<block type="virtualsat_setRunningSpeed">' +
          '<value name="RUNSPEED">' +
            '<shadow type="text">' +
              '<field name="TEXT">Run Speed</field>' +
            '</shadow>' +
          '</value>' +
        '</block>' +
        '</category>' +
  '<category name="Messages" id="messages" colour="#008080" secondaryColour="#086363" ' +
    'showStatusButton="false">' +
      '<block type="messages_sendValueToTopic">' +
      '<value name="VALUE">' +
          '<shadow type="text">' +
            '<field name="TEXT">value</field>' +
        '</shadow>' +
        '</value>' +
        '<value name="TOPIC">' +
          '<shadow type="text">' +
            '<field name="TEXT">topic</field>' +
        '</shadow>' +
        '</value>' +
      '</block>' +
      '<block type="messages_addSubscription">' +
        '<value name="TOPIC">' +
          '<shadow type="text">' +
            '<field name="TEXT">topic</field>' +
          '</shadow>' +
        '</value>' +
      '</block>' +
      '<block type="messages_deleteSubscriptions">' +
      '</block>' +
      '<block type="messages_assignTopicToMessage">' +
        '<value name="TOPIC">' +
            '<shadow type="text">' +
              '<field name="TEXT">topic</field>' +
          '</shadow>' +
        '</value>' +
        '<value name="MESSAGE">' +
            '<shadow type="text">' +
              '<field name="TEXT">message</field>' +
          '</shadow>' +
        '</value>' +
      '</block>' +
      '<block type="messages_unassignTopicToMessage">' +
        '<value name="MESSAGE">' +
            '<shadow type="text">' +
              '<field name="TEXT">message</field>' +
          '</shadow>' +
        '</value>' +
      '</block>' +
    '</category>' +
    '<category name="Movement" id="movement" colour="#6666ff" secondaryColour="#2323B2" ' +
    'showStatusButton="false">' +
    '<block type="movement_whenAnyPresenceSensed">' +
      '<value name="SATELLITE">' +
        '<shadow type="text">' +
          '<field name="TEXT">satellite</field>' +
        '</shadow>' +
      '</value>' +
      '</block>' +
    '<block type="movement_arePresencesSensed">' +
      '<value name="SATELLITE">' +
        '<shadow type="text">' +
          '<field name="TEXT">satellite</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="virtualsat_setRadarSensitivities" id="virtualsat_setRadarSensitivities">' +
    '<value name="SATELLITE">' +
      '<shadow type="text">' +
        '<field name="TEXT">satellite</field>' +
      '</shadow>' +
    '</value>' +
  '</block>' +
  '</category>' +
  '<category name="Touch" id="touch" colour="#ff6699" secondaryColour="#ff6699" ' +
    'showStatusButton="false">' +
    '<block type="touch_whenAnySatTouched">' +
      '<value name="SATELLITE">' +
        '<shadow type="text">' +
          '<field name="TEXT">satellite</field>' +
        '</shadow>' +
      '</value>' +
      '</block>' +
      '<block type="touch_isTouched">' +
        '<value name="SATELLITE">' +
          '<shadow type="text">' +
            '<field name="TEXT">satellites</field>' +
          '</shadow>' +
        '</value>' +
      '</block>' +
    '</category>' +
    '<category name="Device Control" id="virtualSat" colour="#118000" secondaryColour="#13520A" ' +
    'showStatusButton="false">' +
    '<block type="virtualsat_cycleSatellitePower"></block>' +
    '<block type="virtualsat_rebootSatellite">' +
    '<value name="SATELLITE">' +
      '<shadow type="text">' +
        '<field name="TEXT">satellite</field>' +
      '</shadow>' +
    '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#CF173B" secondaryColour="#DB6E00" custom="VARIABLE">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_MYBLOCKS}" id="more" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">' +
    '</category>' +
  '</xml>';
