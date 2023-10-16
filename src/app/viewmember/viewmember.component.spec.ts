import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmemberComponent } from './viewmember.component';

describe('ViewmemberComponent', () => {
  let component: ViewmemberComponent;
  let fixture: ComponentFixture<ViewmemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmemberComponent]
    });
    fixture = TestBed.createComponent(ViewmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
