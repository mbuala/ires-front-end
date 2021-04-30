import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfouserlaboComponent } from './infouserlabo.component';

describe('InfouserlaboComponent', () => {
  let component: InfouserlaboComponent;
  let fixture: ComponentFixture<InfouserlaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfouserlaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfouserlaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
