import './style.css';

import javascriptLogo from '/svg/javascript.svg';
import viteLogo from '/svg/vite.svg';
import reactLogo from '/svg/react.svg';
import eslintLogo from '/svg/eslint.svg';
import typescriptLogo from '/svg/typescript.svg';

import { setupCounter } from './counter.js';
import { launchConfetti } from './confetti.js';

document.addEventListener('DOMContentLoaded', () => {
  launchConfetti();
});


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://react.dev/" target="_blank">
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
      Click <a href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fm%2Fx8v1oNUOmg4AAAAd%2Frickroll-roll.gif&f=1&nofb=1&ipt=9878f744fbf58daecf3182aa56d1ce55da82f1cc89610c68d1bb6b2c2dac3767" id="gateway">here</a> to see the tools live
    </p>
    <span id="ps">Made with <span id="smile"> :)</span> by <a href="https://github.com/EtherD3v" id="dev-a">EtherD3v</a></span>
  </div>`


setupCounter(document.querySelector('#counter'))
