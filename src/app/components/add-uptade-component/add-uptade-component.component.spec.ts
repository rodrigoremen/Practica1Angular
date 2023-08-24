import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUptadeComponentComponent } from './add-uptade-component.component';

describe('AddUptadeComponentComponent', () => {
  let component: AddUptadeComponentComponent;
  let fixture: ComponentFixture<AddUptadeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUptadeComponentComponent]
    });
    fixture = TestBed.createComponent(AddUptadeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
