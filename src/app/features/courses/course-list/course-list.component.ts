import { Component, OnInit } from '@angular/core';
import {Course} from "../course-card/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  isEditable: Boolean = true;
  cards: Course[] =
    [new Course("JavaScript", `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`, new Date("8/3/2021"), 160, ["Vasiliy Dobkin", "Nicolas Kim"],),
      new Course("Angular",`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.`,
        new Date("10/11/2020"), 210, ["Anna Sidorenko", "Valentina Larina"],)]

  constructor() { }

  ngOnInit(): void {
  }

}
