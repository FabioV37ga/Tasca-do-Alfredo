export function getCurrentPage() {
    const lastSegment = window.location.href.split('/').slice(-1)[0]
    const pageName = lastSegment.split('.')[0]

    // Se não houver nome de página, considera a página inicial "home"
    return pageName === '' ? 'home' : pageName
}

export function getDeviceType(width: number) {
    if (width < 1300) {
        return 'mobile'
    }

    if (width < 1400) {
        return 'ipad'
    }

    return 'desktop'
}