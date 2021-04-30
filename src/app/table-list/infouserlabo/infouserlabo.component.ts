import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-infouserlabo',
  templateUrl: './infouserlabo.component.html',
  styleUrls: ['./infouserlabo.component.css']
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
    declarations: [ InfouserlaboComponent ], 
    bootstrap: [ InfouserlaboComponent ]  
    
}) 
export class InfouserlaboComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
