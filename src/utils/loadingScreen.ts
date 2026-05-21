import u from "umbrellajs"

const loadingTexts: string[] = [
    "Preparando a cozinha...",
    "Ajustando as panelas...",
    "Colocando a água para ferver...",
    "Cortando os ingredientes...",
    "Mexendo a panela...",
    "Adicionando temperos secretos...",
    "Quase lá..."
]

const loadingScreen: HTMLElement = u(".loading-screen").first() as HTMLElement
const progressBar: HTMLElement = u(".loading-screen-progress-fill").first() as HTMLElement

export function updateProgressBar(progress: number) {
    progressBar.style.width = `${progress}%`
    const randomIndex = Math.floor(Math.random() * loadingTexts.length)
    const randomText = loadingTexts[randomIndex]
    u(".loading-screen-text").text(randomText)

    if (progress >= 100) {
        loadingScreen.remove()
    }
}

export function initializeLoadingScreen() {
    var loadingLogoContainer = document.querySelector(".loading-screen-logo")! as HTMLElement

    var loadingLogo = loadingLogoContainer.children[0] as HTMLElement

    console.log(loadingLogo)

    const img = new Image()
    img.src = "/badge-logo-white.png"

    img.onload = () => {
        console.log("hasloaded")
        loadingLogoContainer.classList.add("loading-image-loaded")
    }

    var currentTextIndex = 0

    // Atualiza o texto a cada 3 segundos
    var loadTextChangeInterval = setInterval(() => {
        var text = u("#loading-text").first() as HTMLElement

        if (u(".loading-screen").length > 0) {
            text.textContent = loadingTexts[currentTextIndex]
        } else {
            clearInterval(loadTextChangeInterval)
        }

        currentTextIndex++

        if (currentTextIndex == 7)
            clearInterval(loadTextChangeInterval)
    }, 3000);
}