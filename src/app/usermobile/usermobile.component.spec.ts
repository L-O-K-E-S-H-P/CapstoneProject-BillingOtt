import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermobileComponent } from './usermobile.component';

describe('UsermobileComponent', () => {
  let component: UsermobileComponent;
  let fixture: ComponentFixture<UsermobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermobileComponent]
    });
    fixture = TestBed.createComponent(UsermobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
