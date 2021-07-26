import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../../users.model";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() userItem!: Users;
  @Input() index!: number;

  ngOnInit(): void {
  }
}
