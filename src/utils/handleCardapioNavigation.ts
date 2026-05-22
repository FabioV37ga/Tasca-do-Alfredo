import u from "umbrellajs";
import changeSelectedCardapioPage, { appendPageItems, changePageTitle } from "../views/cardapio.view.js";

export class CardapioNavigation {

    static addNavigationHandlers(){
        var navigationButtons = u(".cardapio-page").nodes as HTMLElement[]

        navigationButtons.forEach(element => {
            u(element).on("click", ()=>{
                // changeSelectedCardapioPage(element.getAttribute('value') as string)
                CardapioNavigation.setPage(element.getAttribute('value') as string)
            })
        });
    }

    static setPage(page: string) {
        changeSelectedCardapioPage(page)
        changePageTitle(page)
        appendPageItems(page)
    }
}