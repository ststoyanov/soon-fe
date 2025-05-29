import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCardFrontComponent } from './media-card-front.component';

describe('FrontComponent', () => {
  let component: MediaCardFrontComponent;
  let fixture: ComponentFixture<MediaCardFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaCardFrontComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
