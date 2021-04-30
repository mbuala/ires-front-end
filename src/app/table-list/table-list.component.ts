import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
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
    declarations: [ TableListComponent ], 
    bootstrap: [ TableListComponent ]  
    
}) 
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
