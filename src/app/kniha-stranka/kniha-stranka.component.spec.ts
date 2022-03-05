import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihaStrankaComponent } from './kniha-stranka.component';

describe('KnihaStrankaComponent', () => {
  let component: KnihaStrankaComponent;
  let fixture: ComponentFixture<KnihaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
