import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Debounce1Component } from './debounce-1.component';

describe('Debounce1Component', () => {
  let component: Debounce1Component;
  let fixture: ComponentFixture<Debounce1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Debounce1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Debounce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
