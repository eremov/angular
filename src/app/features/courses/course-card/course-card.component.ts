import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../../services/course";
import {AuthorsStoreService} from "../../../services/authors-store.service";
import {filter, map} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../services/courses.service";
import {CoursesStoreService} from "../../../services/courses-store.service";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() card: Course;

  courseId: string | null;

  constructor(private route: ActivatedRoute, private coursesStoreService: CoursesStoreService) {

  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.coursesStoreService.getCourse(this.courseId).subscribe(data => this.card = data)
    }
  }
}
