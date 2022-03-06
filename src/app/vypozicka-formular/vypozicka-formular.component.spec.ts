import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickaFormularComponent } from './vypozicka-formular.component';

describe('VypozickaFormularComponent', () => {
  let component: VypozickaFormularComponent;
  let fixture: ComponentFixture<VypozickaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
