import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplanComponent } from './viewplan.component';

describe('ViewplanComponent', () => {
  let component: ViewplanComponent;
  let fixture: ComponentFixture<ViewplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewplanComponent]
    });
    fixture = TestBed.createComponent(ViewplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
