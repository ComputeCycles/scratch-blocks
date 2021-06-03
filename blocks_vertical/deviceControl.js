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

goog.provide('Blockly.Blocks.deviceControl');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['event_whenstarted'] = {
  init: function() {
    this.jsonInit({
      "message0": "when started %1",
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "started.svg",
          "width": 24,
          "height": 24,
          "alt": "play button"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_hat"]
    });
  }
};

Blockly.Blocks['deviceControl_stopEvent'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 lights on Satellite %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            ['Clear', 'LS: CLEAR'],
            ['Pause', 'LS: PAUSE'],
            ['Stop', 'LS: STOP'],
            ['Stop and Clear', 'LS: STOPCLEAR'],
          ]
        },
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.lights,
      "extensions": ["colours_lights", "shape_statement"]
    });
  }
};


Blockly.Blocks['deviceControl_addNewVirtualSat'] = {
  init: function() {
    this.jsonInit({
      "message0": "Add Satellite with Name %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_deviceControl", "shape_statement"]
    });
  }
};

Blockly.Blocks['deviceControl_setRadarSensitivities'] = {
  init: function() {
    this.jsonInit({
      "message0": "Set Radar Sensitivity to %1 on %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "SENSITIVITY",
          "options": [
            ['Off', 'off'],
            ['Near', 'near'],
            ['Medium', 'medium'],
            ['Far', 'long'],
            ['Max', 'max'],
          ]
        },
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_movement", "shape_statement"]
    });
  }
};

Blockly.Blocks['deviceControl_cycleSatellitePower'] = {
  init: function() {
    this.jsonInit({
      "message0": "Cycle Satellite Power",
      "category": Blockly.Categories.looks,
      "extensions": ["colours_deviceControl", "shape_statement"]
    });
  }
};

Blockly.Blocks['deviceControl_rebootSatellite'] = {
  init: function() {
    this.jsonInit({
      "message0": "Reboot Satellite(s) %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_deviceControl", "shape_statement"]
    });
  }
};
