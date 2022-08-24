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
  constructor(private coursesStore: CoursesStoreService, private userStoreService: UserStoreService, private router: Router, private coursesStoreService: CoursesStoreService) {
    coursesStore.getAll();
    coursesStore.course$.subscribe(cards => {
      this.cards = cards;
    })
    userStoreService.isAdmin$.subscribe(value => this.isEditable = value);
  }

  ngOnInit(): void {
  }

  routeToShowCourse(id: string) {
    this.router.navigate(['/courses/'+id])
  }

  routeToEditCourse(id: string) {

  }

  deleteCourse(id: string) {
    this.coursesStoreService.deleteCourse(id);
  }


}
