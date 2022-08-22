import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorvinalComponent } from './corvinal.component';

describe('CorvinalComponent', () => {
  let component: CorvinalComponent;
  let fixture: ComponentFixture<CorvinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorvinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorvinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
