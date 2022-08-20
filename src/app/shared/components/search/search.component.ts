import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeHolder : String = '';
  @Output() newSearchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendSearchFraze(fraze: string) {
    this.newSearchEvent.emit(fraze);
  }

}
