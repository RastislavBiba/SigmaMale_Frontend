import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaFormularComponent } from './osoba-formular.component';

describe('OsobaFormularComponent', () => {
  let component: OsobaFormularComponent;
  let fixture: ComponentFixture<OsobaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsobaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
