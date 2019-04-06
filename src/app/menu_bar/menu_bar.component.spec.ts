import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu_barComponent } from './menu_bar.component';

describe('LoginComponent', () => {
  let component: Menu_barComponent;
  let fixture: ComponentFixture<Menu_barComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu_barComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu_barComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
