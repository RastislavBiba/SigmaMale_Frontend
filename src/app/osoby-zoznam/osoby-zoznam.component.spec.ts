import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobyZoznamComponent } from './osoby-zoznam.component';

describe('OsobyZoznamComponent', () => {
  let component: OsobyZoznamComponent;
  let fixture: ComponentFixture<OsobyZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsobyZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobyZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
