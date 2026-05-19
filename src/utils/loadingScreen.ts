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
    var currentTextIndex = 0

    // Atualiza o texto a cada 3 segundos
    var loadTextChangeInterval = setInterval(() => {
        var text = u("#loading-text").first() as HTMLElement

        if (loadingScreen) {
            text.textContent = loadingTexts[currentTextIndex]
        }

        currentTextIndex++

        if (currentTextIndex == 6)
            clearInterval(loadTextChangeInterval)
    }, 3000);
}