import { itensDoCardapio, menuItem } from "../models/itemCardapio.js";
import { updateProgressBar } from "./loadingScreen.js";
import { getCurrentPage, getDeviceType } from "./windowFunctions.js";

// Define o formato de cada asset usado no preload
interface assetList {
    asset: string; // caminho do arquivo de imagem
    page: string;  // página em que o asset deve ser pré-carregado
}

// Assets carregados em todas as páginas
const generalAssets: assetList[] = [
    { asset: '/paper.png', page: 'all' },
    { asset: '/logo-white.png', page: 'all' },
    { asset: '/badge-white.png', page: 'all' },
    { asset: '/shard.png', page: 'all' },
    { asset: '/shard-piece.png', page: 'all' },
    { asset: '/interior-noite.jpeg', page: 'home' },
    { asset: '/azulejo.png', page: 'home' },
    { asset: '/food-icon-1.png', page: 'home' },
    { asset: '/food-icon-2.png', page: 'home' },
    { asset: '/food-icon-3.png', page: 'home' },
    { asset: '/food-icon-4.png', page: 'home' },
    { asset: '/esboco.png', page: 'sobre' },
    { asset: '/picture-sobre.png', page: 'sobre' },
    { asset: '/esboco.png', page: 'cardapio' },
    { asset: '/cardapio-page-0.png', page: 'cardapio' },
    { asset: '/cardapio-page-1.png', page: 'cardapio' },
    { asset: '/cardapio-page-2.png', page: 'cardapio' },
    { asset: '/cardapio-page-3.png', page: 'cardapio' },
    { asset: '/cardapio-page-4.png', page: 'cardapio' },
    { asset: '/cardapio-marker.png', page: 'cardapio' },
]

// Assets adicionais específicos para dispositivos móveis
const mobileAssets: assetList[] = [
    { asset: '/picture-sobre-2.png', page: 'sobre' },
    { asset: '/picture-sobre-3.png', page: 'sobre' }
]

// Assets adicionais específicos para desktop / iPad
const desktopAssets: assetList[] = [
    { asset: '/fachada2.jpeg', page: 'sobre' },
    { asset: '/desktop-mid-image-sobre.png', page: 'sobre' },
    { asset: '/mid-image-sobre.png', page: 'sobre' },
    { asset: '/desktop-sobre-lower-icon-1.png', page: 'sobre' },
    { asset: '/desktop-sobre-lower-icon-2.png', page: 'sobre' },
    { asset: '/desktop-sobre-lower-icon-3.png', page: 'sobre' },
    { asset: '/texture-sobre.png', page: 'sobre' },
    { asset: '/pratos/00-00.png', page: 'cardapio' },
    { asset: '/pratos/01-00.png', page: 'cardapio' },
    { asset: '/pratos/02-01.png', page: 'cardapio' },
    { asset: '/pratos/03-01.png', page: 'cardapio' },
    { asset: '/pratos/04-00.png', page: 'cardapio' }
]

// Descobre a página atual a partir da URL
const currentPage = getCurrentPage()

// Descobre o tipo de dispositivo a partir da largura da janela
const deviceType = getDeviceType(window.innerWidth)

var assetLength: number = 0;
var loadedAssets: number = 0;

// Retorna a lista de assets que devem ser carregados agora
function getAssetsToPreload(page: string, device: string) {
    let assetsToPreload = generalAssets.filter(asset => asset.page === 'all' || asset.page === page)

    if (device === 'mobile') {
        assetsToPreload = assetsToPreload.concat(
            mobileAssets.filter(asset => asset.page === page)
        )
    }

    if (device === 'desktop' || device === 'ipad') {
        assetsToPreload = assetsToPreload.concat(
            desktopAssets.filter(asset => asset.page === page)
        )
    }

    // console.log(assetsToPreload)
    console.log(`(Pre-Load) \n Total assets: ${assetsToPreload.length} \n Page: ${page} \n Device: ${device}`)
    assetLength = assetsToPreload.length

    return assetsToPreload
}

// Função principal chamada pelo app para pré-carregar imagens
export async function preload(page: string, device: string, log?: boolean) {
    const assetsToPreload = getAssetsToPreload(page, device)

    await Promise.all(
        assetsToPreload.map(src => {
            return new Promise<void>((resolve) => {
                const img = new Image()
                img.src = src.asset

                // Resolve a promise tanto em sucesso quanto em erro,
                // para que o preload não fique pendente indefinidamente.
                img.onload = () => {
                    // console.log(`Asset loaded: ${src.asset}`)
                    loadedAssets++

                    logProgress()

                    resolve()
                }

                img.onerror = () => {
                    console.warn(`Falha ao carregar asset: ${src.asset}`)
                    resolve()
                }
            })
        })
    )
    // console.log('Assets carregados.')
}

export function preloadCardapioImages(page: string) {
    if (deviceType === 'desktop' || deviceType === 'ipad') {
        const pageItems = itensDoCardapio[parseInt(page)] as menuItem[]

        pageItems.forEach((item, index) => {
            new Promise<void>((resolve) => {
                const img = new Image()
                img.src = `../../pratos/0${page}-${index < 10 ? '0' + index : index}.png`
                img.onload = () => {
                    console.log("loaded...")
                    resolve()
                }

                img.onerror = () => {
                    // console.warn(`Falha ao carregar asset: ../../pratos/0${page}-${index < 10 ? '0' + index : index}.png`)
                    resolve()
                }
            })
        })
    }
    // console.log(items)
}

/*
    assetsLength ----- 100
    loadedAssets ----- x

    loadedAssets * 100 / assetsLength = progresso em porcentagem

*/

function logProgress() {
    const progress = (loadedAssets * 100) / assetLength
    updateProgressBar(progress)
    console.log(`Progresso do preload: ${progress.toFixed(2)}%`)
}