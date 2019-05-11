import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherModalFormComponent } from './teacher-modal-form.component';

describe('TeacherModalFormComponent', () => {
  let component: TeacherModalFormComponent;
  let fixture: ComponentFixture<TeacherModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
