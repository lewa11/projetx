import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanguageComponent } from './pages/language/language.component';


export const routes: Routes = [
    { path:"" , component: HomeComponent },
    { path:"app-contact" , component: ContactComponent },
    { path:"app-language" , component: LanguageComponent },

    
    { path:"**", redirectTo: "/" }

];
