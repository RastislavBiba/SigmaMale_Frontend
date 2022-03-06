import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickyStrankaComponent } from './vypozicky-stranka.component';

describe('VypozickyStrankaComponent', () => {
  let component: VypozickyStrankaComponent;
  let fixture: ComponentFixture<VypozickyStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickyStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickyStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
