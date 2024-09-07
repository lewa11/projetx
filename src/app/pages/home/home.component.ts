import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { Hero2Component } from '../../components/hero2/hero2.component';
import { Hero3Component } from '../../components/hero3/hero3.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, Hero2Component, Hero3Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
