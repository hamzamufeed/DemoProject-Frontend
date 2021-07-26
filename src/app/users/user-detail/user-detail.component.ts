import {Component, OnInit} from '@angular/core';
import {Users} from "../users.model";
import {UsersService} from "../users.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: Users;
  id!: number;
  tempID !: number;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router,
              private backend: BackendService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          // this.id = +params['id'];
          this.tempID = +params['id'];
          this.user = this.usersService.getUser(this.tempID);
          this.id = this.user.id;
        }
      );
  }

  onEditUser() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteUser() {
    this.usersService.deleteUser(this.tempID);
    this.backend.deleteUser(this.id);
    this.router.navigate(['/users']);
  }
}
