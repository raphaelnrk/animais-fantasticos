// Usar sempre o 'use strict' para controle de dados.

import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabNav.js"
import initModal from "./modules/modal.js"
import initTooltip from "./modules/ToolTip.js"
import initDropdownMenu from "./modules/dropdown-menu.js";
import initmenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchanimais.js";
import initFetchBitcoin from "./modules/fetchbitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initmenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();