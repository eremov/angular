import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() title : String = '';
  @Input() text : String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
