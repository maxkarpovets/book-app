import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { AppComponent } from './app.component';
import { BookInfoComponent } from './book-info/book-info.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'books', component: BookListComponent},
    {path: 'books/:id', component: BookInfoComponent },
    {path: '**', redirectTo: ''},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
