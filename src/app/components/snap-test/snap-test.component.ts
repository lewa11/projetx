import { Component, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { ScrollSnapService } from '../../services/scroll-snap.service';

@Component({
  selector: 'app-snap-test',
  standalone: true,
  imports: [],
  templateUrl: './snap-test.component.html',
  styleUrl: './snap-test.component.css'
})
export class SnapTestComponent implements AfterViewInit, OnDestroy {

    private removeSnapListener?: () => void;

    // utilisation de 'inject' pour obtenir les dependances
    private scrollSnapService = inject(ScrollSnapService);
    private elRef = inject(ElementRef);

    constructor() {}

    //implementation de la methode 'ngAfterViewInit' de l'interface 'AfterViewInit'
    ngAfterViewInit() {
      const scrollElement = this.elRef.nativeElement.querySelector('.scroll-container');

      this.removeSnapListener = this.scrollSnapService.createScrollSnap(scrollElement, {
        snapDestinationY: '100vh', //exemple de destination d'accrochage
        timeout: 100,
        duration: 300,
        threshold: 0.2,
        easing: (t:number) => t * (2 - t) // fonction d'easing par default
      });

    }

    // implementation de la methode 'ngOnDestroy' de l'interface 'OnDestroy'
    ngOnDestroy() {

      if (this.removeSnapListener) {
        this.removeSnapListener();
      }
    }


}
