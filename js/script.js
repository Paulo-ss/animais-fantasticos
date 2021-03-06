// Importando a classe da navegação por tabs na seção de animais
import TabNav from './Modules/tab-nav.js';
// Importando a classe de scroll suave
import ScrollSuave from './Modules/scroll-suave.js';
// Importando a classe do accordion list da seção de FAQ
import Accordion from './Modules/accordion.js';
// Importando a classe de abrir e fechar o modal
import Modal from './Modules/modal.js';
// Importando a classe do tooltip
import ToolTip from './Modules/tooltip.js';
// Importando a classe que faz o fecth dos números e anima eles na seção de números
import fetchAnimais from './Modules/fetch-animais.js';
// Importando a classe que ativa o dropdown-menu
import DropdownMenu from './Modules/dropdown-menu.js';
// Importando a classe que controla o menu mobile
import MenuMobile from './Modules/menu-mobile.js';
// Importando a classe que verifica o horário de funcionamento
import Funcionamento from './Modules/funcionamento.js';
// Importando a classe que traz o valor de bitcoin na seção de contato
import initFetchBitcoin from './Modules/fetch-bitcoin.js';
// Importando a classe que anima as section no scroll da página
import ScrollAnima from './Modules/scroll-anima.js';
// Importando a classe do slide
import { SlideNav } from './Modules/slide.js';

// Iniciando a classe que faz a nevagação por tabs na seção de animais
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

// Iniciando a classe que faz o scroll suave
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// Iniciando a classe do accordion list
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

// Iniciando a classe que abre e fecha o Modal
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

// Iniciando a classe do tooltip
const toolTip = new ToolTip('[data-tooltip]');
toolTip.init();

// Iniciando a função que da o fecth nos números de animais na seção de números
fetchAnimais('./animaisapi.json', '.numeros-grid');

// Iniciando a função que faz o betch de bitcoin na seção de contato
initFetchBitcoin('https://blockchain.info/ticker', '[data-bitcoin]');

// Iniciando a classe do tooltip
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

// Iniciando a classe do dropdown-menu
const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

// Iniciando a classe do menu-mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// Iniciando a classe do horário de funcionamento
const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

// Iniciando a classe do slide
const slideNav = new SlideNav('.slide', '.slide-wrapper');
slideNav.init();
slideNav.addControl('.custom-controls');
