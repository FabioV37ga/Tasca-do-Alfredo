/**
 * ============================================================================
 * ABOUT ANIMATIONS
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Interface AnimationObject
 * 2. Classe AboutAnimations
 *    2.1. showAbout - Animação de exibição da seção About
 *    2.2. slideInAboutItem - Animação de entrada dos itens
 *    2.3. hideAboutItems - Animação de ocultação dos itens
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E INTERFACE
// ---------------------------

import {animate, engine, cubicBezier} from "animejs"

import {Animation, AnimationObject} from "./animation.js";


engine.pauseOnDocumentHidden = true;

// ---------------------------
// 2. CLASSE ABOUTANIMATIONS
// ---------------------------

class AboutAnimations extends Animation{

    static showTitle: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) =>{
            AboutAnimations.showTitle.isPlaying = true;
            element.style.display = 'flex'
            return animate(element, {
                delay: 200,
                opacity: [0,1],
                duration: 200,
                onComplete: ()=>{
                    AboutAnimations.showTitle.isPlaying = false
                }
            })
        }
    }
}

export default AboutAnimations

