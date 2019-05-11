import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailModalComponent } from './teacher-detail-modal.component';

describe('TeacherDetailModalComponent', () => {
  let component: TeacherDetailModalComponent;
  let fixture: ComponentFixture<TeacherDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
