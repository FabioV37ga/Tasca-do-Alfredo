import u from "umbrellajs";
import changeSelectedCardapioPage, { appendPageItems, changePageTitle, changeSelectedItem } from "../views/cardapio.view.js";

export class CardapioNavigation {

    static addNavigationHandlers() {
        var navigationButtons = u(".cardapio-page").nodes as HTMLElement[]

        navigationButtons.forEach(element => {
            u(element).on("click", () => {
                // changeSelectedCardapioPage(element.getAttribute('value') as string)
                CardapioNavigation.setPage(element.getAttribute('value') as string)
                CardapioNavigation.selectItem(element, parseInt(element.getAttribute('value') as string))
                var foodlist = u('.cardapio-page-foodList').first() as HTMLElement
                foodlist.scrollTo(0, 0)
            })
        });
    }

    static setPage(page: string) {
        changeSelectedCardapioPage(page)
        changePageTitle(page)
        appendPageItems(page)
        CardapioNavigation.addPageItemsEvents(page);
    }

    static addPageItemsEvents(page: string) {
        const currentPage = parseInt(page)

        const foodItems = u(".cardapio-page-foodItem").nodes as HTMLElement[]

        foodItems.forEach(element => {
            u(element).on("click", () => {
                if (window.innerWidth > 1000) {
                    CardapioNavigation.selectItem(element, currentPage)
                }
            })
        });
    }

    static selectItem(element: HTMLElement, page: number) {
        var itemIndex = parseInt(element.getAttribute("value") as string)
        changeSelectedItem(itemIndex, page)
    }

}