/* Angular */
import { Routes } from '@angular/router';
/* Page */
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Notfound } from './page/notfound/notfound';
import { Life } from './page/life/life';
import { Design } from './page/design/design';

export const routes: Routes = [
    { path: '', component: Home, title: '[●_○] 홈' },
    { path: 'about', component: About, title: '[●_○] 소개' },
    { path: 'life', component: Life, title: '[●_○] 근황' },
    { path: 'design', component: Design, title: '[●_○] 디자인' },
    // More pages can be added here, 404 must be the last
    { path: '**', component: Notfound, title: '[●_○] 404' }
];