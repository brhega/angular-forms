import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive5Component } from './reactive-5.component';

describe('Reactive5Component', () => {
  let component: Reactive5Component;
  let fixture: ComponentFixture<Reactive5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactive5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactive5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
