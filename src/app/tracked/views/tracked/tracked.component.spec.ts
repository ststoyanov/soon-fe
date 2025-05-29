import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedComponent } from './tracked.component';

describe('TrackedComponent', () => {
  let component: TrackedComponent;
  let fixture: ComponentFixture<TrackedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
