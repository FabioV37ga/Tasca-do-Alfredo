import u from "umbrellajs";
import { closeMenu, expandMenu } from "./utils/handle-mobile-menu.js";
import { preload } from "./utils/preload.js";

// Adiciona função de click ao ícone de expandir menu
u("#project-navigation-expand").on("click", ()=>{
    expandMenu()
})

// Adiciona função para fechar o menu ao clicar no "X"
u("#menu-close").on("click", ()=>{
    closeMenu()
})

// Adiciona função para fechar o menu quando clicar fora dele
u("#outside-menu").on("click", ()=>{
    closeMenu()
})

// Adiciona função para fechar o menu quando clicar em um link do menu
const mobileNavLinks = u(".mobile-nav-item a").nodes as HTMLAnchorElement[]

mobileNavLinks.forEach(link => {
    u(link).on("click", () => {
        closeMenu()
    })
})

await preload()


document.querySelector("html")!.style.display = 'initial'
alert("assets carregados, iniciando app")

// ↑ provavelmente vou refatorar isso num arquivo separado.