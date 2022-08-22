import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrifinoriaComponent } from './grifinoria.component';

describe('GrifinoriaComponent', () => {
  let component: GrifinoriaComponent;
  let fixture: ComponentFixture<GrifinoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrifinoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrifinoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
