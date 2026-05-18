import u from "umbrellajs";

export function expandMenu() {
    const menuElement = u("#collapsable-menu").first() as HTMLElement

    u(menuElement).addClass("opened")
}

export function closeMenu() {
    const menuElement = u("#collapsable-menu").first() as HTMLElement

    u(menuElement).removeClass("opened")
}