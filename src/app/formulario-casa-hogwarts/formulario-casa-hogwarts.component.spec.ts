import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCasaHogwartsComponent } from './formulario-casa-hogwarts.component';

describe('FormularioCasaHogwartsComponent', () => {
  let component: FormularioCasaHogwartsComponent;
  let fixture: ComponentFixture<FormularioCasaHogwartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCasaHogwartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCasaHogwartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
