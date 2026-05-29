import u from 'umbrellajs'
import { strategiesList, projectPages } from '../models/projectModels.js';
import { welcome, strategies } from '../animations/projectAnimations.js'
import { Animation, AnimationObject } from '../animations/animation.js'

export default class ProjectController {
    static currentPage = 0;
    static strategyPage = 0;



    static initialize() {
        // console.log("project initialized")
        ProjectController.addUserInteractions()
    }

    static async navigate(direction: string) {



        if (direction == 'forwards') {
            console.log("Clicou para avançar")
            await ProjectController.hidePage()

            ProjectController.currentPage++
            await ProjectController.renderPage()

            // console.log("navegou para " + ProjectController.currentPage)
        }
        else if (direction == 'backwards') {
            console.log("Clicou para voltar")
            await ProjectController.hidePage()

            ProjectController.currentPage--

            await ProjectController.renderPage()
            // console.log("navegou para " + ProjectController.currentPage)
        }
        console.log("current page: " + ProjectController.currentPage)
    }

    static async hidePage() {
        switch (ProjectController.currentPage) {
            case 0:

                var elements = document.querySelectorAll('.project-welcome-logo > *, #project-start-button') as NodeListOf<HTMLElement>


                for (const element of elements) {
                    // console.log(element)
                    await Animation.animateAndWait(welcome.fadeOut, element, 50)
                }

                Animation.animateAndWait(welcome.darken, u('.background').first() as HTMLElement, 50)

                break;
        }

        const container = u('.project-container > *').nodes as HTMLElement[]

        for (const child of container) {
            if (child.classList.contains('background'))
                continue

            child.remove()
        }
    }

    static async renderPage() {
        // console.log("renderizando página " + ProjectController.currentPage)
        var container: HTMLElement = u('.project-container').first() as HTMLElement
        var background = container.children[0] as HTMLElement

        container.append(projectPages[ProjectController.currentPage]())

        if (ProjectController.currentPage == 0 || ProjectController.currentPage == 4) {
            // console.log(background)
            background.style.opacity = '0.8'

            if (ProjectController.currentPage == 0) {
                container.style.backgroundImage = 'url(../../interior-noite.jpeg)'
            }
        } else {
            // background.style.opacity = '1'
        }


        if (ProjectController.currentPage == 4) {
            container.style.backgroundImage = `url(../../estrategias-fotos/${strategiesList[ProjectController.strategyPage].image})`

            const strategiesTitleSpans = u('.strategies-title-span').nodes as HTMLElement[]
            // console.log(strategiesTitleSpans)
            for (const span of strategiesTitleSpans) {
                await Animation.animateAndWait(strategies.showTitleSpan, span, 50)
            }

            const title = strategiesTitleSpans[0].parentElement as HTMLElement

            ProjectController.navigateStrategies("0")

            Animation.animate(welcome.brighten, u('.background').first() as HTMLElement, 1400)
            await Animation.animateAndWait(strategies.hideTitle, title, 1500)

            title.remove()

            Animation.animate(strategies.slideUp, u('.strategy-display-container').first() as HTMLElement, 0)

            u(".strategy-nav-button").nodes.forEach((button) => {
                Animation.animate(strategies.appear, button as HTMLElement, 50)
            })

            Animation.animate(strategies.appear, u(".navigation-list").first() as HTMLElement, 600)

        }

        // if (ProjectController.currentPage > 0 && ProjectController.currentPage < 4) {
        //     background.style.opacity = '1'
        //     console.log("Page between 0 and 4 rendered, darkening background")
        // }else{
        //     console.log("Page outside 0-4 rendered, brightening background")
        //     background.style.opacity = '0.8'
        // }




        // console.log("adicionando interações da página " + ProjectController.currentPage)
        ProjectController.addUserInteractions()

    }

    static addUserInteractions() {
        if (ProjectController.currentPage == 0) {
            const projectStartButton = u('#project-start-button').first() as HTMLElement

            var clickable = true;
            u(projectStartButton).on('click', () => {
                if (clickable){
                    ProjectController.navigate('forwards')
                    clickable = false;
                }
            })
        }

        else if (ProjectController.currentPage > 0 && ProjectController.currentPage < 4) {
            const navigateBackwardsButton = u('#project-navigation-backwards').first() as HTMLElement

            u(navigateBackwardsButton).on('click', () => {
                ProjectController.navigate('backwards')
            })

            const navigateForwardsButton = u('#project-navigation-forwards').first() as HTMLElement

            u(navigateForwardsButton).on('click', () => {
                // console.log("clicou para avançar")
                ProjectController.navigate('forwards')
            })
        }

        else if (ProjectController.currentPage == 4) {
            u("#strategy-nav-forwards").on('click', () => {
                ProjectController.navigateStrategies('forwards')
            })

            u("#strategy-nav-backwards").on('click', () => {
                ProjectController.navigateStrategies('backwards')
            })

            const navigationItems = u('.navigation-item').nodes as HTMLElement[]

            navigationItems.forEach((item, index) => {
                u(item).on('click', () => {
                    ProjectController.navigateStrategies(index.toString())
                })

                u(".strategy-item").nodes[index].addEventListener('click', () => {
                    ProjectController.navigateStrategies(index.toString())
                })
            })
        }
    }

    static navigateStrategies(direction: string) {

        const background = u('.background').first() as HTMLElement
        const container = u('.project-container').first() as HTMLElement

        if (direction == 'forwards') {
            if (ProjectController.strategyPage + 1 > 4) {
                ProjectController.navigate("forwards")
                return
            } else {
                ProjectController.strategyPage++
                container.style.backgroundImage = `url(../../estrategias-fotos/${strategiesList[ProjectController.strategyPage].image})`
            }
        }

        else if (direction == 'backwards') {
            if (ProjectController.strategyPage - 1 < 0) {
                ProjectController.navigate("backwards")
                return
            } {
                ProjectController.strategyPage--
                container.style.backgroundImage = `url(../../estrategias-fotos/${strategiesList[ProjectController.strategyPage].image})`
            }
        }

        else {
            ProjectController.strategyPage = parseInt(direction);
            container.style.backgroundImage = `url(../../estrategias-fotos/${strategiesList[ProjectController.strategyPage].image})`
        }
        console.log(strategiesList[ProjectController.strategyPage])
        const strategyItems = u('.strategy-item').nodes as HTMLElement[]
        const navigationItems = u('.navigation-item').nodes as HTMLElement[]


        strategyItems.forEach((item, index) => {
            if (index == ProjectController.strategyPage) {
                item.classList.add("selected")
                navigationItems[index].classList.add("selected")

                item.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center'
                })
            }
            else {
                item.classList.remove("selected")
                navigationItems[index].classList.remove("selected")
            }
        })
    }
}