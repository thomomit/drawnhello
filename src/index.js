import p5 from 'p5';
import { sketch } from './sketch.js';

// instance mode
var node = document.createElement('div');
node.className = 'canvas-wrapper';
const app = new p5(sketch, node);
window.document.getElementsByTagName('body')[0].appendChild(node);