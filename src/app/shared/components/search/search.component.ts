import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesStoreService} from "../../../services/courses-store.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() placeHolder : String = '';
  @Output() newSearchEvent = new EventEmitter<string>();
  searchStr: string = '';

  constructor(private coursesStoreService: CoursesStoreService) { }


  onSearchClick() {
    if (this.searchStr) {
      this.coursesStoreService.searchCoursesByTitle(this.searchStr);
    } else {
      this.coursesStoreService.getAll();
    }
  }

}
