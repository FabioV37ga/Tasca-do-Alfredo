import u from 'umbrellajs'
import { projectPages } from '../models/projectModels.js';
import { welcome } from '../animations/projectAnimations.js'
import { Animation, AnimationObject } from '../animations/animation.js'

export default class ProjectController {
    static currentPage = 0;



    static initialize() {
        console.log("project initialized")
        const projectStartButton = u('#project-start-button').first() as HTMLElement

        u(projectStartButton).on('click', () => {
            ProjectController.navigate('forwards')
        })
    }

    static async navigate(direction: string) {
        if (direction == 'forwards') {

            await ProjectController.hidePage()

            ProjectController.currentPage++

            await ProjectController.renderPage()


        }
        else if (direction == 'backwards') {
            ProjectController.currentPage - 1 < 0 ? null : ProjectController.currentPage--
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
            if (
                child.classList.contains('navigation-button') ||
                child.classList.contains('background')

            ) continue

            child.remove()
        }
    }

    static async renderPage() {
        var container = u('.project-container').first() as HTMLElement

        switch (ProjectController.currentPage) {
            case 1:
                break;
        }

        container.append(projectPages[ProjectController.currentPage]())

    }
}