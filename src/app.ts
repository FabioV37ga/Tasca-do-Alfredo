import { addMenuListeners } from "./utils/handleMobileMenu.js";
import { preload } from "./utils/preload.js";
import { initializeLoadingScreen } from "./utils/loadingScreen.js";
import { getCurrentPage, getDeviceType } from "./utils/windowFunctions.js";
import { CardapioNavigation } from "./utils/handleCardapioNavigation.js";
import ProjectController from "./controllers/project.controller.js";

// Inicializa a tela de carregamento
initializeLoadingScreen()

// Adiciona os listeners para o menu mobile
addMenuListeners()

// Obtém a página atual e o tipo de dispositivo para pré-carregar os recursos necessários
const currentPage = getCurrentPage()
const deviceType = getDeviceType(window.innerWidth)

// Pré-carrega as imagens necessárias para a página atual e tipo de dispositivo
await preload(currentPage, deviceType)

// Métodos de inicialização específicos para cada página
currentPage == 'cardapio' ? CardapioNavigation.initialize() : null

currentPage == 'projeto' ? ProjectController.initialize() : null


