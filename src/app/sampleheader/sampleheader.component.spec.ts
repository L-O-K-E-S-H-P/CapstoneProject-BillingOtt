import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleheaderComponent } from './sampleheader.component';

describe('SampleheaderComponent', () => {
  let component: SampleheaderComponent;
  let fixture: ComponentFixture<SampleheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleheaderComponent]
    });
    fixture = TestBed.createComponent(SampleheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
