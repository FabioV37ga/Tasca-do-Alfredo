import { addMenuListeners} from "./utils/handleMobileMenu.js";
import { preload } from "./utils/preload.js";
import { initializeLoadingScreen } from "./utils/loadingScreen.js";
import { getCurrentPage, getDeviceType } from "./utils/windowFunctions.js";
import { CardapioNavigation } from "./utils/handleCardapioNavigation.js";


// Inicializa a tela de carregamento
initializeLoadingScreen()

// Adiciona os listeners para o menu mobile
addMenuListeners()

// Pré-carrega as imagens necessárias para a página atual e tipo de dispositivo
await preload(getCurrentPage(), getDeviceType(window.innerWidth))

if (getCurrentPage() == 'cardapio'){
    CardapioNavigation.addNavigationHandlers()
    CardapioNavigation.setPage('0')
}

