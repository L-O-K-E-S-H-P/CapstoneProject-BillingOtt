import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkfamilyComponent } from './linkfamily.component';

describe('LinkfamilyComponent', () => {
  let component: LinkfamilyComponent;
  let fixture: ComponentFixture<LinkfamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkfamilyComponent]
    });
    fixture = TestBed.createComponent(LinkfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
