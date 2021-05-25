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

goog.provide('Blockly.Blocks.playspotDisplay');
 
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['playspotDisplay_image'] = {
  init: function() {
    this.jsonInit({
      "message0": "Display Image %1 in %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "IMAGE",
          "options": [
            ['Eight', 'Eight'],
            ['Empty', 'Empty'],
            ['Farm', 'Farm'],
            ['FarmFrame', 'FarmFrame'],
            ['Five', 'Five'],
            ['Four', 'Four'],
            ['GameAgent', 'GameAgent'],
            ['GameAgentFrame', 'GameAgentFrame'],
            ['GameAnimals', 'GameAnimals'],
            ['GameAnimalsFrame', 'GameAnimalsFrame'],
            ['GameMusic', 'GameMusic'],
            ['GameMusicFrame', 'GameMusicFrame'],
            ['GameZombie', 'GameZombie'],
            ['GameZombieFrame', 'GameZombieFrame'],
            ['Go', 'Go'],
            ['HeartFrame', 'HeartFrame'],
            ['HeartFull', 'HeartFull'],
            ['IconJungle', 'IconJungle'],
            ['IconJungleFrame', 'IconJungleFrame'],
            ['IconWeather', 'IconWeather'],
            ['IconWeatherFrame', 'IconWeatherFrame'],
            ['IdleFarm', 'IdleFarm'],
            ['IdleFarmFrame', 'IdleFarmFrame'],
            ['IdleMusic', 'IdleMusic'],
            ['IdleMusicFrame', 'IdleMusicFrame'],
            ['Jungle', 'Jungle'],
            ['JungleFrame', 'JungleFrame'],
            ['Music', 'Music'],
            ['MusicFrame', 'MusicFrame'],
            ['Nine', 'Nine'],
            ['One', 'One'],
            ['Seven', 'Seven'],
            ['Six', 'Six'],
            ['StarFrame', 'StarFrame'],
            ['StarFull', 'StarFull'],
            ['Ten', 'Ten'],
            ['Three', 'Three'],
            ['Two', 'Two'],
            ['Weather', 'Weather'],
            ['WeatherFrame', 'WeatherFrame']
          ]
        },
        {
          "type": "field_dropdown",
          "name": "REGION",
          "options": [
            ['Upper', 'upper'],
            ['Lower', 'lower'],
          ]
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_playspotDisplay", "shape_statement"]
    });
  }
};

Blockly.Blocks['playspotDisplay_animateImage'] = {
  init: function() {
    this.jsonInit({
      "message0": "Animate image %1 to %2, from %3 in %4",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FROM",
          "options": [
            ['Eight', 'Eight'],
            ['Empty', 'Empty'],
            ['Farm', 'Farm'],
            ['FarmFrame', 'FarmFrame'],
            ['Five', 'Five'],
            ['Four', 'Four'],
            ['GameAgent', 'GameAgent'],
            ['GameAgentFrame', 'GameAgentFrame'],
            ['GameAnimals', 'GameAnimals'],
            ['GameAnimalsFrame', 'GameAnimalsFrame'],
            ['GameMusic', 'GameMusic'],
            ['GameMusicFrame', 'GameMusicFrame'],
            ['GameZombie', 'GameZombie'],
            ['GameZombieFrame', 'GameZombieFrame'],
            ['Go', 'Go'],
            ['HeartFrame', 'HeartFrame'],
            ['HeartFull', 'HeartFull'],
            ['IconJungle', 'IconJungle'],
            ['IconJungleFrame', 'IconJungleFrame'],
            ['IconWeather', 'IconWeather'],
            ['IconWeatherFrame', 'IconWeatherFrame'],
            ['IdleFarm', 'IdleFarm'],
            ['IdleFarmFrame', 'IdleFarmFrame'],
            ['IdleMusic', 'IdleMusic'],
            ['IdleMusicFrame', 'IdleMusicFrame'],
            ['Jungle', 'Jungle'],
            ['JungleFrame', 'JungleFrame'],
            ['Music', 'Music'],
            ['MusicFrame', 'MusicFrame'],
            ['Nine', 'Nine'],
            ['One', 'One'],
            ['Seven', 'Seven'],
            ['Six', 'Six'],
            ['StarFrame', 'StarFrame'],
            ['StarFull', 'StarFull'],
            ['Ten', 'Ten'],
            ['Three', 'Three'],
            ['Two', 'Two'],
            ['Weather', 'Weather'],
            ['WeatherFrame', 'WeatherFrame']
          ]
        },
        {
          "type": "field_dropdown",
          "name": "TO",
          "options": [
            ['Eight', 'Eight'],
            ['Empty', 'Empty'],
            ['Farm', 'Farm'],
            ['FarmFrame', 'FarmFrame'],
            ['Five', 'Five'],
            ['Four', 'Four'],
            ['GameAgent', 'GameAgent'],
            ['GameAgentFrame', 'GameAgentFrame'],
            ['GameAnimals', 'GameAnimals'],
            ['GameAnimalsFrame', 'GameAnimalsFrame'],
            ['GameMusic', 'GameMusic'],
            ['GameMusicFrame', 'GameMusicFrame'],
            ['GameZombie', 'GameZombie'],
            ['GameZombieFrame', 'GameZombieFrame'],
            ['Go', 'Go'],
            ['HeartFrame', 'HeartFrame'],
            ['HeartFull', 'HeartFull'],
            ['IconJungle', 'IconJungle'],
            ['IconJungleFrame', 'IconJungleFrame'],
            ['IconWeather', 'IconWeather'],
            ['IconWeatherFrame', 'IconWeatherFrame'],
            ['IdleFarm', 'IdleFarm'],
            ['IdleFarmFrame', 'IdleFarmFrame'],
            ['IdleMusic', 'IdleMusic'],
            ['IdleMusicFrame', 'IdleMusicFrame'],
            ['Jungle', 'Jungle'],
            ['JungleFrame', 'JungleFrame'],
            ['Music', 'Music'],
            ['MusicFrame', 'MusicFrame'],
            ['Nine', 'Nine'],
            ['One', 'One'],
            ['Seven', 'Seven'],
            ['Six', 'Six'],
            ['StarFrame', 'StarFrame'],
            ['StarFull', 'StarFull'],
            ['Ten', 'Ten'],
            ['Three', 'Three'],
            ['Two', 'Two'],
            ['Weather', 'Weather'],
            ['WeatherFrame', 'WeatherFrame']
          ]
        },
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            ['Down', 'down'],
            ['Up', 'up'],
            ['Left', 'left'],
            ['Right', 'right'],
          ]
        },
        {
          "type": "field_dropdown",
          "name": "REGION",
          "options": [
            ['Upper', 'upper'],
            ['Lower', 'lower'],
          ]
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_playspotDisplay", "shape_statement"]
    });
  }
};

Blockly.Blocks['playspotDisplay_fillImage'] = {
  init: function() {
    this.jsonInit({
      "message0": "Fill image %1 b/e: %2 / %3, RGB: %4 / %5 / %6 in %7",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "IMAGE",
          "options": [
            ['Eight', 'Eight'],
            ['Empty', 'Empty'],
            ['Farm', 'Farm'],
            ['FarmFrame', 'FarmFrame'],
            ['Five', 'Five'],
            ['Four', 'Four'],
            ['GameAgent', 'GameAgent'],
            ['GameAgentFrame', 'GameAgentFrame'],
            ['GameAnimals', 'GameAnimals'],
            ['GameAnimalsFrame', 'GameAnimalsFrame'],
            ['GameMusic', 'GameMusic'],
            ['GameMusicFrame', 'GameMusicFrame'],
            ['GameZombie', 'GameZombie'],
            ['GameZombieFrame', 'GameZombieFrame'],
            ['Go', 'Go'],
            ['HeartFrame', 'HeartFrame'],
            ['HeartFull', 'HeartFull'],
            ['IconJungle', 'IconJungle'],
            ['IconJungleFrame', 'IconJungleFrame'],
            ['IconWeather', 'IconWeather'],
            ['IconWeatherFrame', 'IconWeatherFrame'],
            ['IdleFarm', 'IdleFarm'],
            ['IdleFarmFrame', 'IdleFarmFrame'],
            ['IdleMusic', 'IdleMusic'],
            ['IdleMusicFrame', 'IdleMusicFrame'],
            ['Jungle', 'Jungle'],
            ['JungleFrame', 'JungleFrame'],
            ['Music', 'Music'],
            ['MusicFrame', 'MusicFrame'],
            ['Nine', 'Nine'],
            ['One', 'One'],
            ['Seven', 'Seven'],
            ['Six', 'Six'],
            ['StarFrame', 'StarFrame'],
            ['StarFull', 'StarFull'],
            ['Ten', 'Ten'],
            ['Three', 'Three'],
            ['Two', 'Two'],
            ['Weather', 'Weather'],
            ['WeatherFrame', 'WeatherFrame']
          ]
        },
        {
          "type": "input_value",
          "name": "BEGIN"
        },
        {
          "type": "input_value",
          "name": "END"
        },
        {
          "type": "input_value",
          "name": "RED"
        },
        {
          "type": "input_value",
          "name": "GREEN"
        },
        {
          "type": "input_value",
          "name": "BLUE"
        },
        {
          "type": "field_dropdown",
          "name": "REGION",
          "options": [
            ['Upper', 'upper'],
            ['Lower', 'lower'],
          ]
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_playspotDisplay", "shape_statement"]
    });
  }
};

Blockly.Blocks['playspotDisplay_displayHistogram'] = {
  /**
     * Block for when a sprite is touching an object.
     * @this Blockly.Block
     */
  init: function() {
    this.jsonInit({
      "message0": "Display Equalizer, R: %1, G: %2, B: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "RED"
        },
        {
          "type": "input_value",
          "name": "GREEN"
        },
        {
          "type": "input_value",
          "name": "BLUE"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_playspotDisplay", "shape_statement"]
    });
  }
};
  
