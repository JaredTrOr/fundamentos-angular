import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaComputadorasComponent } from './alta-computadoras.component';

describe('AltaComputadorasComponent', () => {
  let component: AltaComputadorasComponent;
  let fixture: ComponentFixture<AltaComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaComputadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
