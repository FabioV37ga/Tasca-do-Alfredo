import u from "umbrellajs";

function expandMenu() {
    const menuElement = u("#collapsable-menu").first() as HTMLElement

    u(menuElement).addClass("opened")
}

function closeMenu() {
    const menuElement = u("#collapsable-menu").first() as HTMLElement

    u(menuElement).removeClass("opened")
}

export function addMenuListeners() {
    // Adiciona função de click ao ícone de expandir menu
    u("#project-navigation-expand").on("click", () => {
        expandMenu()
    })

    // Adiciona função para fechar o menu ao clicar no "X"
    u("#menu-close").on("click", () => {
        closeMenu()
    })

    // Adiciona função para fechar o menu quando clicar fora dele
    u("#outside-menu").on("click", () => {
        closeMenu()
    })

    // Adiciona função para fechar o menu quando clicar em um link do menu
    const mobileNavLinks = u(".mobile-nav-item a").nodes as HTMLAnchorElement[]

    mobileNavLinks.forEach(link => {
        u(link).on("click", () => {
            closeMenu()
        })
    })
}