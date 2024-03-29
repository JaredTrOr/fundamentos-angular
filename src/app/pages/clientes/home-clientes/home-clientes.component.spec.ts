import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClientesComponent } from './home-clientes.component';

describe('HomeClientesComponent', () => {
  let component: HomeClientesComponent;
  let fixture: ComponentFixture<HomeClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
