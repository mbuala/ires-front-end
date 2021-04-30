import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomedecinComponent } from './infomedecin.component';

describe('InfomedecinComponent', () => {
  let component: InfomedecinComponent;
  let fixture: ComponentFixture<InfomedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
