import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonserinaComponent } from './sonserina.component';

describe('SonserinaComponent', () => {
  let component: SonserinaComponent;
  let fixture: ComponentFixture<SonserinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonserinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonserinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
