import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplanComponent } from './userplan.component';

describe('UserplanComponent', () => {
  let component: UserplanComponent;
  let fixture: ComponentFixture<UserplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserplanComponent]
    });
    fixture = TestBed.createComponent(UserplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
