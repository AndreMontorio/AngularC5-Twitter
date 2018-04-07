import { Routes, RouterModule } from '@angular/router';
import { Component, ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
