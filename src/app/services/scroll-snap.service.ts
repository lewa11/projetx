import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollSnapService {

  constructor() { }

    // Méthode principale pour créer le comportement de scroll snap
  createScrollSnap(element: HTMLElement, settings: any, callback?: () => void) {
        // Extraction des paramètres de configuration avec des valeurs par défaut
    const {
      snapDestinationX = '0px',  // Destination de l'accrochage sur l'axe X (par défaut 0px)
      snapDestinationY = '0px', // Destination de l'accrochage sur l'axe Y (par défaut 0px)
      timeout = 100,  // Délai après lequel le défilement est considéré comme terminé (par défaut 100ms)
      duration = 300, // Durée de l'animation du snap (par défaut 300ms)
      threshold = 0.2,    // Seuil de défilement pour déclencher l'accrochage (par défaut 0.2)
      snapStop = false,   // Arrêter le défilement lors de l'accrochage (par défaut false)
      easing = (t: number) => t * (2 -t), // Fonction d'assouplissement (par défaut: easeOutQuad)

    } = settings;

    // Variable pour garder trace de l'animation
    let start: number | null = null; // Temps de début de l'animation
    let isSnapping = false; // Indique si l'animation est en cours

    // Fonction d'animation pour effectuer le snap
    const performSnap = (timestamp: number) => { // variable pour garder trace de l'animation

      if (start === null) start = timestamp; // Initialisation du temps de début

      const elapsed = timestamp - start; // Calcul du temps écoulé depuis le début de l'animation

      const progress = Math.min(elapsed / duration, 1); // Calcul de la progression de l'animation

      element.scrollLeft += (parseFloat(snapDestinationX as string) - element.scrollLeft) * easing(progress); // Animation de l'accrochage sur l'axe X
      element.scrollTop += (parseFloat(snapDestinationY as string) - element.scrollTop) * easing(progress); // Animation de l'accrochage sur l'axe Y
  
      if (progress < 1) {
        requestAnimationFrame(performSnap); // Continuer l'animation si elle n'est pas terminée
      } else {
        if (callback) callback(); 

        isSnapping = false;
      }
    };
    const onScroll = () => {
      if (isSnapping) return; // Vérifier si l'animation est en cours

      isSnapping = true;
      start = null; // réinitialiser le debut de l'animation

      setTimeout(() => {
        requestAnimationFrame(performSnap); // Démarrer l'animation
      }, timeout);
    };
    element.addEventListener('scroll', onScroll); // attache l'écouteur d'évenement de defilement à l'élément

    return () => element.removeEventListener('scroll', onScroll);
  }
}
