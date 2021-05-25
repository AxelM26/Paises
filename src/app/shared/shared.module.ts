import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
    
  ],
  imports: [
    CommonModule,
    // AppRoutingModule este tambien se puede utilizar
    RouterModule
  ]
})
export class SharedModule { }
