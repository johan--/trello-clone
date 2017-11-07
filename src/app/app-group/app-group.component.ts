import { Group } from './group';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './app-group.component.html',
  styleUrls: ['./app-group.component.css']
})
export class AppGroupComponent implements OnInit {
  @Input() group: Group;

  changedGroup: Group;

  constructor() {}

  ngOnInit() {
    this.changedGroup._id = this.group._id;
    this.changedGroup.title = this.group.title;
    this.changedGroup.boardId = this.group.boardId;
    this.changedGroup.order = this.group.order;
  }
}