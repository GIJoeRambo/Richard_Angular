import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUpdateModalComponent } from './teacher-update-modal.component';

describe('TeacherUpdateModalComponent', () => {
  let component: TeacherUpdateModalComponent;
  let fixture: ComponentFixture<TeacherUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
