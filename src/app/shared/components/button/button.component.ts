import {Component, Input, OnInit} from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {Router} from "@angular/router";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() iconName : String = '';
  @Input() buttonText : String = '';

  faTrash = faTrash;
  faEdit = faEdit

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
