import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Product } from './page/product/product';

export const routes: Routes = [
    {
        path: "", component: Home
    },
    {
        path: "home", component: Home
    },
    {
        path: "about", component: About
    },
    {
        path: "contact", component: Contact
    },
    {
        path: "product", component: Product
    }

];
