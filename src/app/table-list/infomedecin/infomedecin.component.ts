import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-infomedecin',
  templateUrl: './infomedecin.component.html',
  styleUrls: ['./infomedecin.component.css']
})
@NgModule({ 
  imports: 
  [ 
    BrowserModule, 
    FormsModule, 
    MatTabsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    
    
    
  ],
    declarations: [ InfomedecinComponent ], 
    bootstrap: [ InfomedecinComponent ]  
    
}) 
export class InfomedecinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
