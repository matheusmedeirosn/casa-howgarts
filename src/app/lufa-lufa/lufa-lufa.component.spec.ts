import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LufaLufaComponent } from './lufa-lufa.component';

describe('LufaLufaComponent', () => {
  let component: LufaLufaComponent;
  let fixture: ComponentFixture<LufaLufaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LufaLufaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LufaLufaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
