import u from "umbrellajs";
import { elementModel, itensDoCardapio } from "../models/itemCardapio.js";

export default function changeSelectedCardapioPage(pageIndex: string) {

    var pageElements = document.querySelectorAll(".cardapio-page")

    pageElements.forEach(element => {
        if (element.getAttribute("value") != pageIndex) {

            element.setAttribute("id", "")
        } else {
            element.setAttribute("id", "selected-page")
        }

        // console.log("pagina " + pageIndex + " selecionada.")
    });
}

export function appendPageItems(page: string) {
    var container = u(".cardapio-page-foodList").first() as HTMLElement

    var currentItems = u(".cardapio-page-foodItem, .cardapio-page-section").nodes

    if (currentItems) {
        currentItems.forEach(element => {
            element.remove()
        });
    }

    itensDoCardapio[parseInt(page)]
        .forEach(item => {
            container.append(elementModel(item))
        });
}

export function changePageTitle(page: string){
    var pageTitleString: string = '';
    switch (page){
        case '0':
            pageTitleString = "Entradas & Petiscos"
            break;
        case '1':
            pageTitleString = "Pratos Principais"
            break;
        case '2':
            pageTitleString = "Sobremesas & etc."
            break;
        case '3':
            pageTitleString = "Bebidas"
            break;
        case '4':
            pageTitleString = "Refrescos"
            break;
    }

    var titleElement = u("#selected-page-title").first() as HTMLElement

    titleElement.textContent = pageTitleString
}