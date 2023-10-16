import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileplansComponent } from './mobileplans.component';

describe('MobileplansComponent', () => {
  let component: MobileplansComponent;
  let fixture: ComponentFixture<MobileplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileplansComponent]
    });
    fixture = TestBed.createComponent(MobileplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
