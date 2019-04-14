import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesIconComponent } from './languages-icon.component';

describe('LanguagesIconComponent', () => {
  let component: LanguagesIconComponent;
  let fixture: ComponentFixture<LanguagesIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
