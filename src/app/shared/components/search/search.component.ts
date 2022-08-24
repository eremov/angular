import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesStoreService} from "../../../services/courses-store.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeHolder : String = '';
  @Output() newSearchEvent = new EventEmitter<string>();

  constructor(private coursesStoreService: CoursesStoreService) { }

  ngOnInit(): void {
  }

  sendSearchFraze(fraze: string) {
    if (fraze) {
      this.coursesStoreService.searchCoursesByTitle(fraze);
    } else {
      this.coursesStoreService.getAll();
    }
  }

}
