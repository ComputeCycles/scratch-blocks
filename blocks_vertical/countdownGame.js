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

goog.provide('Blockly.Blocks.countdownGame');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['countdown_startTimer'] = {
  init: function() {
    this.jsonInit({
      "message0": "Start Timer",
      "category": Blockly.Categories.event,
      "extensions": ["colours_countdown", "shape_statement"]
    });
  }
};

Blockly.Blocks['countdown_startCelebration'] = {
  init: function() {
    this.jsonInit({
      "message0": "Start Celebration",
      "category": Blockly.Categories.event,
      "extensions": ["colours_countdown", "shape_statement"]
    });
  }
};

Blockly.Blocks['countdown_whenTimerStarted'] = {
  init: function() {
    this.jsonInit({
      "message0": "When I receive start Timer",
      "category": Blockly.Categories.event,
      "extensions": ["colours_countdown", "shape_hat"]
    });
  }
};

Blockly.Blocks['countdown_whenCelebrationStarted'] = {
  init: function() {
    this.jsonInit({
      "message0": "When I receive Celebration",
      "category": Blockly.Categories.event,
      "extensions": ["colours_countdown", "shape_hat"]
    });
  }
};

Blockly.Blocks['countdown_gameMode'] = {
  init: function() {
    this.jsonInit({
      "message0": "When game mode changes to: %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MODE",
          "options": [
            ['Unknown', '0x30'],
            ['Cause and Effect', '0x31'],
            ['Complex', '0x32'],
            ['Kid', '0x33']
          ],
          "check": "Boolean",
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_countdown", "shape_hat"]
    });
  }
};

Blockly.Blocks['countdown_gameModeCheck'] = {
  init: function() {
    this.jsonInit({
      "message0": "Game mode equals: %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MODE",
          "options": [
            ['Unknown', '0x30'],
            ['Cause and Effect', '0x31'],
            ['Complex', '0x32'],
            ['Kid', '0x33']
          ],
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_countdown", "output_boolean"]
    });
  }
};
