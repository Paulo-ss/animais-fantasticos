// Importando a função da navegação por tabs na seção de animais
import iniciarTabMenu from './Modules/tab-nav.js';
// Importando a função de scroll suave
import scrollSuave from './Modules/scroll-suave.js';
// Chamando a função do accordion list da seção de FAQ
import accordionFAQ from './Modules/accordion.js';
// Chamando a função que anima as section no scroll da página
import animacaoScroll from './Modules/scroll-animacao.js';
// Chamando a função de abrir e fechar o modal
import abrirModal from './Modules/modal.js';
// Chamando a função do tooltipe
import toolTip from './Modules/tooltip.js';
// Chamando a função que ativa o dropdown-menu
import dropdownMenu from './Modules/dropdown-menu.js';
// Importando função que controla o menu mobile
import menuMobile from './Modules/menu-mobile.js';
// Importando a função que verifica o horário de funcionamento
import funcionamento from './Modules/funcionamento.js';
// Importanto a função que faz o fecth dos números e anima eles na seção de números
import initFetchAnimais from './Modules/fetch-animais.js';
// Importando a função que traz o valor de bitcoin na seção de contato
import initFetchBitcoin from './Modules/fetch-bitcoin.js';

iniciarTabMenu();
scrollSuave();
accordionFAQ();
animacaoScroll();
abrirModal();
toolTip();
dropdownMenu();
menuMobile();
funcionamento();
initFetchAnimais();
initFetchBitcoin();
