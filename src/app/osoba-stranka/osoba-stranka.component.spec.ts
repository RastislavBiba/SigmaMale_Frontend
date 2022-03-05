import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobaStrankaComponent } from './osoba-stranka.component';

describe('OsobaStrankaComponent', () => {
  let component: OsobaStrankaComponent;
  let fixture: ComponentFixture<OsobaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsobaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
