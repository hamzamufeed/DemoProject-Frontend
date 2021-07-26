import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

  onGetUsers() {
    this.backend.getUsers();
  }
}
