import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  constructor(public router:Router){
    
  }

  colorDesactivado = "#555555";
  colorActivado = "#000000";

 
}
