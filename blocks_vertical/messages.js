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

goog.provide('Blockly.Blocks.messages');
 
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
 

Blockly.Blocks['message_sendGameMQTT'] = {
  init: function() {
    this.jsonInit({
      "message0": "Send value %1 to Broadcast topic %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "input_value",
          "name": "TOPIC"
        }
      ],
      "category": Blockly.Categories.messages,
      "extensions": ["colours_messages", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['message_receiveGameMQTT'] = {
  init: function() {
    this.jsonInit({
      "message0": "Listen for broadcast %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TOPIC"
        }
      ],
      "category": Blockly.Categories.messages,
      "extensions": ["colours_messages", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_waitUntilBroadcast'] = {
  init: function() {
    this.jsonInit({
      "message0": "Wait until broadcast received on %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TOPIC"
        }
      ],
      "category": Blockly.Categories.messages,
      "extensions": ["colours_messages", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_resetThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "Reset thread",
      "args0": [],
      "category": Blockly.Categories.messages,
      "extensions": ["colours_messages", "shape_statement"]
    });
  }
};
