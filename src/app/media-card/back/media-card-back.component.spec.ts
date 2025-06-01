import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCardBackComponent } from './media-card-back.component';

describe('MediaCardBackComponent', () => {
  let component: MediaCardBackComponent;
  let fixture: ComponentFixture<MediaCardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaCardBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
