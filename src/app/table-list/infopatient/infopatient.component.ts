import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
 
import { DataSource } from '@angular/cdk/table';

declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './infopatient.component.html',
  styleUrls: ['./infopatient.component.css']
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
    declarations: [ InfoPatient ], 
    bootstrap: [ InfoPatient ]  
    
}) 
export class InfoPatient implements OnInit {
  elements: any = [];
  constructor() { }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          
      });
  }
  ngOnInit() {
    

  }

}
