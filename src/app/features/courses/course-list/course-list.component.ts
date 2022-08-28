import { Component, OnInit } from '@angular/core';
import {CoursesStoreService} from "../../../services/courses-store.service";
import {Course} from "../../../services/course";
import {UserStoreService} from "../../../user/services/user-store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  isEditable: Boolean = true;
  cards: Course[];
  constructor(private coursesStore: CoursesStoreService, private userStoreService: UserStoreService,
              private router: Router, private coursesStoreService: CoursesStoreService) {
  }

  ngOnInit(): void {
    this.coursesStore.getAll();
    this.coursesStore.course$.subscribe(cards => {
      this.cards = cards;
    })
    this.userStoreService.isAdmin$.subscribe(value => this.isEditable = value);
  }

  deleteCourse(id: string) {
    this.coursesStoreService.deleteCourse(id);
  }


}
