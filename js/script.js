// Usar sempre o 'use strict' para controle de dados.

import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabNav.js"
import Modal from './modules/modal.js';
import Tooltip from "./modules/ToolTip.js"
import fetchAnimais from "./modules/fetchanimais.js";
import fetchBitcoin from "./modules/fetchbitcoin.js";

import initDropdownMenu from "./modules/dropdown-menu.js";
import initmenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import scrollAnima from "./modules/scroll-anima.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollanima = new scrollAnima('[data-anime="scroll"]');
scrollanima.init();

initDropdownMenu();
initmenuMobile();
initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
