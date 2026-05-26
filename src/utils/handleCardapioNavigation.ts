import u from "umbrellajs";
import changeSelectedCardapioPage, { appendPageItems, changePageTitle, changeSelectedItem } from "../views/cardapio.view.js";

export class CardapioNavigation {
    static initialize() {
        CardapioNavigation.addNavigationHandlers()

        const page = new URLSearchParams(window.location.search).get('page') || '0'

        CardapioNavigation.setPage(page)

        if (page == '3') {
            var foodList = u('.cardapio-page-foodList').first() as HTMLElement
            var wineSection = u('.cardapio-page-section').nodes[1] as HTMLElement

            foodList.scrollTo(0, wineSection.offsetTop - foodList.offsetTop - 20)

        }
    }


    static addNavigationHandlers() {
        var navigationButtons = u(".cardapio-page").nodes as HTMLElement[]

        navigationButtons.forEach(element => {
            u(element).on("click", () => {
                // changeSelectedCardapioPage(element.getAttribute('value') as string)
                CardapioNavigation.setPage(element.getAttribute('value') as string)

                CardapioNavigation.selectItem(u("body").first() as HTMLElement, parseInt(element.getAttribute('value') as string))
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
        var selectedItem;
        if (element == u("body").first()) {
            selectedItem = u(".cardapio-page-foodItem").first() as HTMLElement
        } else {
            selectedItem = element
        }

        var itemIndex = parseInt(selectedItem.getAttribute("value") as string)
        changeSelectedItem(itemIndex, page)
    }

}