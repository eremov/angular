import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public formData = {
    title: '',
    description: '',
    authorName: '',
    authors: [],
    duration: 0,
  }

  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
  }

  get title() { return this.editForm.get('title')!; }

  get description() { return this.editForm.get('description')!; }

  get duration() { return this.editForm.get('duration')!; }

  get authorName() { return this.editForm.get('authorName')!; }

  get authors() { return this.editForm.controls['authors'] as FormArray; }

  addAuthor() {
    const authorForm = this.fb.group({
      name: [this.editForm.get('authorName')?.value]
    });
    this.authors.push(authorForm);
  }

  deleteAuthor(authorIndex: number) {
    this.authors.removeAt(authorIndex);
  }

}
