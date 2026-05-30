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

    var itemDescription = u(".foodItem-text-container p").nodes

    itemDescription.forEach(element => {
        if (element.textContent == ''){
            element.remove()
        }
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

export function changeSelectedItem(item: number, page: number){
    console.log("Selected item " + item + " of page " + page)

    const imageElement = u(".aside-item-image").first() as HTMLElement

    var imageUrl = `../../pratos/0${page}-${item < 10 ? '0' + item : item}.png`
    imageElement.style.backgroundImage = `url(${imageUrl})`

    const itemTitleElement = u(".aside-item-title").first() as HTMLElement

    const selectedItem = itensDoCardapio[page][item]
    itemTitleElement.textContent = selectedItem.title

    const itemDescriptionElement = u(".aside-item-description").first() as HTMLElement

    if ('text' in selectedItem){
        if (selectedItem.desktopText){
            itemDescriptionElement.textContent = selectedItem.desktopText
        } else {
            itemDescriptionElement.textContent = selectedItem.text
        }
    }
}
