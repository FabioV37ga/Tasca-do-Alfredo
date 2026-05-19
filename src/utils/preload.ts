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
    { asset: '/picture-sobre.png', page: 'sobre' }
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
    { asset: '/desktop-sobre-lower-icon-3.png', page: 'sobre' }
]

// Descobre a página atual a partir da URL
const currentPage = getCurrentPage()

// Descobre o tipo de dispositivo a partir da largura da janela
const deviceType = getDeviceType(window.innerWidth)

function getCurrentPage() {
    const lastSegment = window.location.href.split('/').slice(-1)[0]
    const pageName = lastSegment.split('.')[0]

    // Se não houver nome de página, considera a página inicial "home"
    return pageName === '' ? 'home' : pageName
}

function getDeviceType(width: number) {
    if (width < 1300) {
        return 'mobile'
    }

    if (width < 1400) {
        return 'ipad'
    }

    return 'desktop'
}

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

    console.log(`Assets a serem pré-carregados: ${assetsToPreload.length} para a página ${page} no dispositivo ${device}`)
    assetLength = assetsToPreload.length

    return assetsToPreload
}

// Função principal chamada pelo app para pré-carregar imagens
export async function preload() {
    const assetsToPreload = getAssetsToPreload(currentPage, deviceType)

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
    console.log('Assets carregados.')
}

/*
    assetsLength ----- 100
    loadedAssets ----- x

    loadedAssets * 100 / assetsLength = progresso em porcentagem

*/

function logProgress() {
    const progress = (loadedAssets * 100) / assetLength
    console.log(`Progresso do preload: ${progress.toFixed(2)}%`)
}