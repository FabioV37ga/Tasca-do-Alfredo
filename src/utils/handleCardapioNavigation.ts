import u from "umbrellajs";
import changeSelectedCardapioPage, { appendPageItems, changePageTitle, changeSelectedItem } from "../views/cardapio.view.js";

export class CardapioNavigation {
    static initialize() {
        CardapioNavigation.addNavigationHandlers()

        const page = new URLSearchParams(window.location.search).get('page') || '0'

        CardapioNavigation.setPage(page)

        // Se a página for a de vinhos, rola até a seção de vinhos
        if (page == '3') {
            var foodList = u('.cardapio-page-foodList').first() as HTMLElement
            var wineSection = u('.cardapio-page-section').nodes[1] as HTMLElement
            foodList.scrollTo(0, wineSection.offsetTop - foodList.offsetTop - 20)
        }
    }

    // Adiciona os listeners para os botões de navegação entre as páginas do cardápio
    static addNavigationHandlers() {
        var navigationButtons = u(".cardapio-page").nodes as HTMLElement[]

        navigationButtons.forEach(element => {
            u(element).on("click", () => {
                
                // Muda a página do cardápio para a página selecionada
                CardapioNavigation.setPage(element.getAttribute('value') as string)

                // Seleciona o primeiro item da página toda vez que uma nova página é selecionada
                CardapioNavigation.selectItem(u("body").first() as HTMLElement, parseInt(element.getAttribute('value') as string))

                // Rola a lista de comidas para o topo toda vez que uma nova página é selecionada
                var foodlist = u('.cardapio-page-foodList').first() as HTMLElement
                foodlist.scrollTo(0, 0)
            })
        });
    }

    static setPage(page: string) {
        // Muda a página do cardápio, o título da página e os itens exibidos de acordo com a página selecionada
        changeSelectedCardapioPage(page)
        changePageTitle(page)
        appendPageItems(page)
        // Adiciona os listeners para os itens da página selecionada
        CardapioNavigation.addPageItemsEvents(page);
    }

    static addPageItemsEvents(page: string) {
        // Adiciona os listeners para os itens da página selecionada, para que quando um item seja clicado ele seja selecionado e suas informações sejam exibidas
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
        // TODO: marcador visual para o item selecionado
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