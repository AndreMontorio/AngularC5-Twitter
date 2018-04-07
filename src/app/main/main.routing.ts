import { Routes, RouterModule } from '@angular/router';
import { Component, ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main.component';
import { AuthGuard } from '../auth.guard';

const mainRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard], canLoad: [AuthGuard] }
];

export const mainRouting: ModuleWithProviders = RouterModule.forChild(mainRoutes);
