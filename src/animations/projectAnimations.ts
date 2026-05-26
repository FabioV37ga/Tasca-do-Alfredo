import { Animation, AnimationObject } from "./animation.js";

import { animate, engine, cubicBezier } from "animejs"

engine.pauseOnDocumentHidden = true;


// ---------------------------
// Animações página inicial

// Esconder:
const fadeOut: AnimationObject = {
    isPlaying: false,
    animation: (element: HTMLElement, delay: number) => {
        fadeOut.isPlaying = true;
        return animate(element, {
            opacity: [1, 0],
            duration: 250,
            delay: delay,
            easing: cubicBezier(0.4, 0, 0.2, 1),
            onComplete: () => {
                // element.style.display = 'none';
                fadeOut.isPlaying = false;
            }
        })
    }
}

// Escurecer background:
const darken: AnimationObject = {
    isPlaying: false,
    animation: (element: HTMLElement, delay: number) => {
        darken.isPlaying = true;
        return animate(element, {
            opacity: [0.8, 1],
            duration: 2500,
            delay: delay,
            easing: 'linear',
            onComplete: () => {
                darken.isPlaying = false;
            }
        })
    }
}


export const welcome = { fadeOut, darken }