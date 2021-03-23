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

 goog.provide('Blockly.Blocks.movement');
 
 goog.require('Blockly.Blocks');
 goog.require('Blockly.Colours');
 goog.require('Blockly.constants');
 goog.require('Blockly.ScratchBlocks.VerticalExtensions');
 
 Blockly.Blocks['movement_arePresencesSensed'] = {
   init: function() {
     this.jsonInit({
        "message0": 'Are any %1 sensing presence?',
        "args0": [
          {
            "type": "input_value",
            "name": "SATELLITE"
          }
        ],
        "category": Blockly.Categories.movement,
        "extensions": ["colours_movement", "output_boolean"]
     });
   }
 };

 Blockly.Blocks['movement_waitUntilSatSensing'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until a a presence is sensed %1",
            "args0": [
      {
        "type": "input_value",
        "name": "SATELLITE",
        "check": "Boolean"
      }
    ],
      "category": Blockly.Categories.touch,
      "extensions": ["colours_movement", "shape_hat"]
    });
  }
};

Blockly.Blocks['movement_whenAnyPresenceSensed'] = {
  init: function() {
    this.jsonInit({
      "message0": 'When presence detected at %1',
      "args0": [
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.touch,
      "extensions": ["colours_movement", "shape_hat"]
    });
  }
};


