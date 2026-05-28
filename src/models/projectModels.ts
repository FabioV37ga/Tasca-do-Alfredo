import html from 'nanohtml'

export function projectStart() {
    return html`
    <div class="project-welcome">
        <div class="project-welcome-logo">
            <img src="badge-logo-white.png" alt="" id="project-welcome-logo">
            <h1 id="project-welcome-title">Alma e Identidade Portuguesa</h1>
            <p id="project-welcome-subtitle">Na contramão da padronização</p>
        </div>
        <div class="project-start-button-container">
            <a id="project-start-button">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
    `
}

function project360(source: string, title: string) {
    return html`
   <div class="project-navigation-container">
        <a id="project-navigation-backwards" class="projects-navigation-button">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        <h1 id="project-page-title">
            ${title}
        </h1>
        <a id="project-navigation-forwards" class="projects-navigation-button">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
    </div>
    
    <iframe width="100%" 
        height="${window.innerWidth >= 1000 ? window.innerHeight - 80 - 88 : window.innerHeight - 69}px" 
        frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowfullscreen scrolling="no" src="${source}">
    </iframe>
    
    `
}

function strategies() {
    return html`
            <div class="project-strategies-container">
                <h1 class="strategies-title">
                    <span id="strategies-title-0" class="strategies-title-span">Estratégias</span>
                    <span id="strategies-title-1" class="strategies-title-span">de</span>
                    <span id="strategies-title-2" class="strategies-title-span">Conforto</span>
                </h1>
                <div class="strategy-navigation-container">
                    <a id="strategy-nav-backwards" class="strategy-nav-button">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </a>
                    <a id="strategy-nav-forwards" class="strategy-nav-button">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="strategy-display-container">
                    ${strategiesList.map(strategyItem)}
                    </div>
                <div class="navigation-list">
                    ${strategiesList.map((_, index) => html`
                        <div id="nav-item-${index}" class="navigation-item"></div>
                    `)}
                </div>
            </div>
    `
}

function strategyItem(strategy: strategy) {
    return html`
        <div class="strategy-item ${strategy.isSelected ? '' : ''}">
            <div class="strategy-item-icon">
                <img src="estrategias-fotos/${strategy.icon}" alt="">
            </div>
            <div class="strategy-item-right">
                <div class="strategy-item-title">
                    <h2>${strategy.title}</h2>
                </div>
                <div class="strategy-item-description">
                    ${strategy.description.map((p) => p)}
                </div>
            </div>
        </div>
    `
}

export const projectPages: Array<() => HTMLElement> = [
    projectStart,
    () => project360('https://kuula.co/share/LvzfY?logo=1&info=1&fs=0&vr=0&autorotate=0.1&thumbs=1', 'Salão Interno'),
    () => project360('https://kuula.co/share/LvzfM?logo=1&info=1&fs=0&vr=0&autorotate=0.1&thumbs=1', 'Salão Externo'),
    () => project360('https://kuula.co/share/Lvzfd?logo=1&info=1&fs=0&vr=0&autorotate=0.1&thumbs=1', 'Banheiros'),
    strategies,
]

interface strategy {
    title: string;
    description: HTMLElement[];
    icon: string;
    image: string;
    isSelected: boolean;
}

function paragraph(paragraph: string): HTMLElement {
    return html`
    <p class="strategy-description">
        ${paragraph}
    </p>
    `
}

export const strategiesList: strategy[] = [
    {
        title: 'Conforto Olfativo',
        description: [
            paragraph('Sistema de exaustão eficiente na cozinha'),
            paragraph('Pressão negativa na área na área de preparo'),
            paragraph('Separação física  entre cozinhae salão')
        ],
        icon: '/strategy-ico-0.png',
        image: 'olfativo.jpg',
        isSelected: true
    },
    {
        title: 'Conforto Acústico',
        description: [
            paragraph('Uso de tecidos nos bancos e cadeiras'),
            paragraph('Elementos têxteis suspensos na área externa'),
            paragraph('Absorção sonora e redução da reverberação'),
            paragraph('Ambientes mais confortáveis para conversas e permanência')
        ],
        icon: '/strategy-ico-1.png',
        image: 'acustico.jpg',
        isSelected: false
    },
    {
        title: 'Conforto Funcional',
        description: [
            paragraph('Fluxos bem definidos entre cozinha, salão e áreas de apoio'),
            paragraph('Circulações amplas e desobstruídas'),
            paragraph('Layout que favorece a operação e o atendimento'),
            paragraph('Mobiliário ergonômico para clientes e equipe')
        ],
        icon: '/strategy-ico-2.png',
        image: 'funcional.jpg',
        isSelected: false
    },
    {
        title: 'Conforto Visual',
        description: [
            paragraph('Iluminação indireta e difusa'),
            paragraph('Temperatura de cor quente (2700K-3000K)'),
            paragraph('Controle da luz natural'),
            paragraph('Valorização da materialidade e dos tons terrosos')
        ],
        icon: '/strategy-ico-3.png',
        image: 'visual.jpg',
        isSelected: false
    },
    {
        title: 'Conforto Térmico',
        description: [
            paragraph('Ventilação cruzada entre aberturas frontal e superior'),
            paragraph('Climatização artificial'),
            paragraph('Materiais que reduzem a absorção de calor'),
            paragraph('Controle da incidência solar com sombreamento')
        ],
        icon: '/strategy-ico-4.png',
        image: 'termico.jpg',
        isSelected: false
    },
]


/*
<iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/LvJ8Z?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
*/