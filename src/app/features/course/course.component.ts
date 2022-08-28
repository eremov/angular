import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {Course, CourseModel} from "../../services/course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  isEditMode: boolean = false;
  courseId: string | null = '';
  public formData: CourseModel = new CourseModel();

  editForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) {
    this.editForm = new FormGroup({
      title: new FormControl(this.formData.title, [
        Validators.required,
        Validators.minLength(4)
      ]),
      description: new FormControl(this.formData.description, [
        Validators.required,
        Validators.minLength(10)
      ]),
      authorName: new FormControl(this.formData.authorName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      authors: new FormArray([]),
      duration: new FormControl(this.formData.duration, [
        Validators.required,
        Validators.min(0)
      ]),
    })

    this.courseId = this.route.snapshot.paramMap.get('id');

    if (this.courseId) {
      this.isEditMode = true;
      this.coursesService.getCourse(this.courseId).subscribe(data => {
        this.editForm.patchValue({
          title: data.title,
          description: data.description,
          duration: data.duration,
          authors: data.authors
        });
      })
    }
  }

  get title() {
    return this.editForm.get('title')!;
  }

  get description() {
    return this.editForm.get('description')!;
  }

  get duration() {
    return this.editForm.get('duration')!;
  }

  get authorName() {
    return this.editForm.get('authorName')!;
  }

  get authors() {
    return this.editForm.controls['authors'] as FormArray;
  }

  addAuthor() {
    const authorForm = this.fb.group({
      name: [this.editForm.get('authorName')?.value]
    });
    this.authors.push(authorForm);
  }

  deleteAuthor(authorIndex: number) {
    this.authors.removeAt(authorIndex);
  }

  updateCourse() {
    const course: CourseModel = new CourseModel();
    course.title = this.editForm.value.title;
    course.description = this.editForm.value.description;
    course.duration = this.editForm.value.duration;
    course.id = this.courseId ?? '';
    course.authors = [];

    this.coursesService.editCourse(course).subscribe(data => {
        this.router.navigate(['/courses']);
      }
    )
  }

  createCourse() {
    const course: CourseModel = new CourseModel();
    course.title = this.editForm.value.title;
    course.description = this.editForm.value.description;
    course.duration = this.editForm.value.duration;
    course.id = this.courseId ?? '';
    course.authors = [];
    this.coursesService.createCourse(course).subscribe(data => {
        this.router.navigate(['/courses']);
      }
    )
  }

}
