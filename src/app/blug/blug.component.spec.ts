import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlugComponent } from './blug.component';

describe('BlugComponent', () => {
  let component: BlugComponent;
  let fixture: ComponentFixture<BlugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlugComponent]
    });
    fixture = TestBed.createComponent(BlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
