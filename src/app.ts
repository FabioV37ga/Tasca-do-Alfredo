import u from "umbrellajs";
import { closeMenu, expandMenu } from "./utils/handle-mobile-menu.js";

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