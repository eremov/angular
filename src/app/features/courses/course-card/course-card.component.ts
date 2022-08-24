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
  isViewExistingMode: boolean = false;
  existingCard: Course;

  @Input() card: Course;

  courseId: string;

  constructor(private route: ActivatedRoute, private coursesStoreService: CoursesStoreService) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['id'];
    });

    if (this.courseId) {
      this.isViewExistingMode = true;
      //Tod present current card
    }
  }
}
