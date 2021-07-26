import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getUsers()
  }

}
