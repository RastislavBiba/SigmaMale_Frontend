import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihaFormularComponent } from './kniha-formular.component';

describe('KnihaFormularComponent', () => {
  let component: KnihaFormularComponent;
  let fixture: ComponentFixture<KnihaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
