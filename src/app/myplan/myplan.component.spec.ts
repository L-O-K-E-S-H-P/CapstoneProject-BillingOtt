import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplanComponent } from './myplan.component';

describe('MyplanComponent', () => {
  let component: MyplanComponent;
  let fixture: ComponentFixture<MyplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyplanComponent]
    });
    fixture = TestBed.createComponent(MyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
