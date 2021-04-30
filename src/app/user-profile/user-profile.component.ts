import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
@NgModule({ 
  imports: 
  [ 
    BrowserModule, 
    FormsModule, 
    MatTabsModule,
    BrowserAnimationsModule
  ],
    declarations: [ UserProfileComponent ], 
    bootstrap: [ UserProfileComponent ]  
    
}) 
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
