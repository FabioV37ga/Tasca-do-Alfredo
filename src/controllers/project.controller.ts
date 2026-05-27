import u from 'umbrellajs'
import { projectPages } from '../models/projectModels.js';
import { welcome } from '../animations/projectAnimations.js'
import { Animation, AnimationObject } from '../animations/animation.js'

export default class ProjectController {
    static currentPage = 0;



    static initialize() {
        console.log("project initialized")

        ProjectController.addUserInteractions()
    }

    static async navigate(direction: string) {
        if (direction == 'forwards') {

            await ProjectController.hidePage()

            ProjectController.currentPage++

            await ProjectController.renderPage()

            console.log("navegou para " + ProjectController.currentPage)
        }
        else if (direction == 'backwards') {
            await ProjectController.hidePage()

            ProjectController.currentPage - 1 < 0 ? null : ProjectController.currentPage--

            await ProjectController.renderPage()
            console.log("navegou para " + ProjectController.currentPage)
        }
    }

    static async hidePage() {
        switch (ProjectController.currentPage) {
            case 0:

                var elements = document.querySelectorAll('.project-welcome-logo > *, #project-start-button') as NodeListOf<HTMLElement>


                for (const element of elements) {
                    console.log(element)
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
        console.log("renderizando página " + ProjectController.currentPage)
        var container = u('.project-container').first() as HTMLElement

        container.append(projectPages[ProjectController.currentPage]())

        console.log("adicionando interações da página " + ProjectController.currentPage)
        ProjectController.addUserInteractions()

    }

    static addUserInteractions() {
        if (ProjectController.currentPage == 0) {
            const projectStartButton = u('#project-start-button').first() as HTMLElement

            u(projectStartButton).on('click', () => {
                ProjectController.navigate('forwards')
            })
        }

        else if (ProjectController.currentPage > 0 && ProjectController.currentPage < 4) {
            const navigateBackwardsButton = u('#project-navigation-backwards').first() as HTMLElement

            u(navigateBackwardsButton).on('click', () => {
                ProjectController.navigate('backwards')
            })

            const navigateForwardsButton = u('#project-navigation-forwards').first() as HTMLElement

            u(navigateForwardsButton).on('click', () => {
                console.log("clicou para avançar")
                ProjectController.navigate('forwards')
            })
        }

    }
}