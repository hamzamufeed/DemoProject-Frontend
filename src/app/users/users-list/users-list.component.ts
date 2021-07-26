import {Component, OnDestroy, OnInit} from '@angular/core';
import {Users} from "../users.model";
import {UsersService} from "../users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users!: Users[];
  subscription!: Subscription;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              private backend: BackendService) { }

  ngOnInit(): void {
    this.subscription = this.usersService.UserChanged
      .subscribe(
        (users: Users[]) => {
          this.users = users;
        }
      );
    this.backend.getUsers();
    this.users = this.usersService.getUsers();
  }

  onNewUser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
