import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnihaZoznamComponent } from './kniha-zoznam.component';

describe('KnihaZoznamComponent', () => {
  let component: KnihaZoznamComponent;
  let fixture: ComponentFixture<KnihaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnihaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnihaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
