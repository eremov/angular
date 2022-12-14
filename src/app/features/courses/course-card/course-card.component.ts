import {Component, Input, OnInit} from '@angular/core';
import {Course} from "./course";
import {formatDate} from '@angular/common'

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

  formatDate(date: Date){
    return formatDate(date, 'dd.MM.yyyy', 'en_US')
  }
}
