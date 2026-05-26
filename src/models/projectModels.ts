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

function project360(source: string) {
    return html`
    <iframe width="100%" height="100%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowfullscreen scrolling="no" src="${source}">
    </iframe>
    `
}

export const projectPages: Array<() => HTMLElement> = [
    projectStart,
    () => project360('https://kuula.co/share/LvJ8Z?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1')

]

/*
<iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/LvJ8Z?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
*/