import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeComponent } from './change.component';

describe('ChangeComponent', () => {
  let component: ChangeComponent;
  let fixture: ComponentFixture<ChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeComponent]
    });
    fixture = TestBed.createComponent(ChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
