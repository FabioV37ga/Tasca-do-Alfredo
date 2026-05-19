interface assetList {
    asset: string;
    page: string
}

const generalAssets: assetList[] = [
    { asset: '/paper.png', page: 'all' },
    { asset: '/logo-white.png', page: 'all' },
    { asset: '/badge-white.png', page: 'all' },
    { asset: '/shard.png', page: 'all' },
    { asset: '/shard-piece.png', page: 'all' },
    { asset: '/interior-noite.jpeg', page: 'home' },
    { asset: '/food-icon-1.png', page: 'home' },
    { asset: '/food-icon-2.png', page: 'home' },
    { asset: '/food-icon-3.png', page: 'home' },
    { asset: '/food-icon-4.png', page: 'home' },
    { asset: '/esboco.png', page: 'sobre' },
    { asset: '/picture-sobre.png', page: 'sobre' }
]

const mobileAssets: assetList[] = [
    { asset: '/picture-sobre-2.png', page: 'sobre' },
    { asset: '/picture-sobre-3.png', page: 'sobre' }
]

const desktopAssets: assetList[] = [
    { asset: '/fachada2.jpeg', page: 'sobre' },
    { asset: '/desktop-mid-image-sobre.png', page: 'sobre' },
    { asset: '/mid-image-sobre.png', page: 'sobre' },
    { asset: '/desktop-sobre-lower-icon-1.png', page: 'sobre' },
    { asset: '/desktop-sobre-lower-icon-2.png', page: 'sobre' },
    { asset: '/desktop-sobre-lower-icon-3.png', page: 'sobre' }
]


var currentPage = window.location.href.split('/').slice(-1)[0].split('.')[0]

currentPage == "" ? currentPage = "home" : null

var windowWidth = window.innerWidth

var deviceType: string;

if (windowWidth < 1300) {
    deviceType = "mobile";
} else if (windowWidth >= 1300 && windowWidth < 1400) {
    deviceType = "ipad";
} else {
    deviceType = "desktop";
}

export async function preload() {
    console.log("Iniciando preload, página: " + currentPage + ", dispositivo: " + deviceType)

    var assetsToPreload = generalAssets.filter(asset => asset.page === 'all' || asset.page === currentPage)

    if (deviceType === 'mobile') {
        assetsToPreload = assetsToPreload.concat(mobileAssets.filter(asset => asset.page === currentPage))
    }
    else if (deviceType === 'desktop' || deviceType === 'ipad') {
        assetsToPreload = assetsToPreload.concat(desktopAssets.filter(asset => asset.page === currentPage))
    }

    await Promise.all(
        assetsToPreload.map(src => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.src = src.asset;

                // console.log(`Preloading asset: ${src.asset}`);
                img.onload = () => {
                    console.log(`Asset loaded: ${src.asset}`);
                    resolve()
                };

                img.onerror = () => {
                    console.warn(`Falha ao carregar asset: ${src.asset}`);
                    resolve()
                };
            })
        })
    )
    console.log("Assets carregados.")
}