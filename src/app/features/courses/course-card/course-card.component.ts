import {Component, Input, OnInit} from '@angular/core';
import {Course} from "./course";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() card: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
