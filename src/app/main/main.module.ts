import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { mainRouting } from './main.routing';
import { TimeLineComponent } from './time-line/time-line.component';
import { TrandingTopicsComponent } from './tranding-topics/tranding-topics.component';
import { FilterPipe } from '../filter.pipe';


@NgModule({
  imports: [
    mainRouting,
    CommonModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    MainComponent,
    TimeLineComponent,
    TrandingTopicsComponent,
    FilterPipe
  ],
  bootstrap: [MainComponent]
})
export class MainModule { }
