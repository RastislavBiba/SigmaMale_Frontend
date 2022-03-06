import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickyZoznamComponent } from './vypozicky-zoznam.component';

describe('VypozickyZoznamComponent', () => {
  let component: VypozickyZoznamComponent;
  let fixture: ComponentFixture<VypozickyZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickyZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickyZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
