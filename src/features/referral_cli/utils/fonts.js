import figlet from 'figlet';

import font3dAscii from 'figlet/importable-fonts/3D-ASCII.js';
import alligator from 'figlet/importable-fonts/Alligator.js';
import banner from 'figlet/importable-fonts/Banner.js';
import big from 'figlet/importable-fonts/Big.js';
import block from 'figlet/importable-fonts/Block.js';
import bubble from 'figlet/importable-fonts/Bubble.js';
import calvinS from 'figlet/importable-fonts/Calvin S.js';
import chunky from 'figlet/importable-fonts/Chunky.js';
import cola from 'figlet/importable-fonts/Cola.js';
import doom from 'figlet/importable-fonts/Doom.js';
import epic from 'figlet/importable-fonts/Epic.js';
import ghost from 'figlet/importable-fonts/Ghost.js';
import graffiti from 'figlet/importable-fonts/Graffiti.js';
import hollywood from 'figlet/importable-fonts/Hollywood.js';
import italic from 'figlet/importable-fonts/Italic.js';
import jazmine from 'figlet/importable-fonts/Jazmine.js';
import larry3d from 'figlet/importable-fonts/Larry 3D.js';
import lean from 'figlet/importable-fonts/Lean.js';
import modular from 'figlet/importable-fonts/Modular.js';
import moscow from 'figlet/importable-fonts/Moscow.js';
import ogre from 'figlet/importable-fonts/Ogre.js';
import patorjkHex from 'figlet/importable-fonts/Patorjk-HeX.js';
import poison from 'figlet/importable-fonts/Poison.js';
import roman from 'figlet/importable-fonts/Roman.js';
import slant from 'figlet/importable-fonts/Slant.js';
import speed from 'figlet/importable-fonts/Speed.js';
import starWars from 'figlet/importable-fonts/Star Wars.js';
import stop from 'figlet/importable-fonts/Stop.js';
import tombstone from 'figlet/importable-fonts/Tombstone.js';
import varsity from 'figlet/importable-fonts/Varsity.js';
import standard from 'figlet/importable-fonts/Standard.js';

const fonts = {
  '3D-ASCII': font3dAscii,
  Alligator: alligator,
  Banner: banner,
  Big: big,
  Block: block,
  Bubble: bubble,
  'Calvin S': calvinS,
  Chunky: chunky,
  Cola: cola,
  Doom: doom,
  Epic: epic,
  Ghost: ghost,
  Graffiti: graffiti,
  Hollywood: hollywood,
  Italic: italic,
  Jazmine: jazmine,
  'Larry 3D': larry3d,
  Lean: lean,
  Modular: modular,
  Moscow: moscow,
  Ogre: ogre,
  'Patorjk-HeX': patorjkHex,
  Poison: poison,
  Roman: roman,
  Slant: slant,
  Speed: speed,
  'Star Wars': starWars,
  Stop: stop,
  Tombstone: tombstone,
  Varsity: varsity,
  Standard: standard,
};

export const loadFonts = () => {
  for (const [name, data] of Object.entries(fonts)) {
    figlet.parseFont(name, data);
  }
};

export const availableFonts = Object.keys(fonts);
