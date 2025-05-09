import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive2Component } from './reactive-2.component';

describe('Reactive2Component', () => {
  let component: Reactive2Component;
  let fixture: ComponentFixture<Reactive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactive2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
