import './style.css';

import javascriptLogo from './img/javascript.svg';
import viteLogo from './img/vite.svg';
import reactLogo from './img/react.svg';
import eslintLogo from './img/eslint.svg';
import typescriptLogo from './img/typescript.svg';
import smileFace from './img/smile.svg';

import { setupCounter } from './counter.js';
import { launchConfetti } from './confetti';

document.addEventListener('DOMContentLoaded', () => {
  launchConfetti();
});


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://react.dev" target="_blank">
      <img src="${reactLogo}" class="logo" id="react" alt="React logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo" id="js" alt="JavaScript logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" id="vite" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo" id="ts" alt="TypeScript logo" />
    </a>
    <a href="https://eslint.org/" target="_blank">
      <img src="${eslintLogo}" class="logo" id="eslint" alt="ESlint logo" />
    </a>
    <h1>Try <a id="preview-a" href="https://github.com/EtherD3v/NerdITools">NerdITools</a> now !</h1>
    <div class="card">
      <button id="counter" type="button" ></button>
    </div>
    <p class="read-the-docs">
      Click on NerdITools to learn more
    </p>
    <span id="ps">Made with <img src="${smileFace}" id="smile" alt="smileFace"/> by <a href="https://github.com/EtherD3v" id="dev-a">EtherD3v</a></span>
  </div>`


setupCounter(document.querySelector('#counter'))
