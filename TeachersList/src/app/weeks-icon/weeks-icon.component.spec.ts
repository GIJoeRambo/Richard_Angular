import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksIconComponent } from './weeks-icon.component';

describe('WeeksIconComponent', () => {
  let component: WeeksIconComponent;
  let fixture: ComponentFixture<WeeksIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeksIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeksIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
