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

goog.provide('Blockly.Blocks.touch');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['touch_sendTouch'] = {
  init: function() {
    this.jsonInit({
      "message0": "Send Touch Message %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.touch,
      "extensions": ["colours_touch", "shape_statement"]
    });
  }
};

Blockly.Blocks['touch_isTouched'] = {
  init: function() {
    this.jsonInit({
      "message0": 'Are any of %1 being touched?',
      "args0": [
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.touch,
      "extensions": ["colours_touch", "output_boolean"]
    });
  }
};

Blockly.Blocks['touch_whenAnySatTouched'] = {
  init: function() {
    this.jsonInit({
      "message0": 'When touch detected at %1',
      "args0": [
        {
          "type": "input_value",
          "name": "SATELLITE"
        }
      ],
      "category": Blockly.Categories.touch,
      "extensions": ["colours_touch", "shape_hat"]
    });
  }
};