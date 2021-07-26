import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UsersService} from "../users.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Users} from "../users.model";
import {BackendService} from "../../backend.service";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  id!: number;
  editMode = false;
  userForm!: FormGroup;
  tempID !: number;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private router: Router,
              private backend: BackendService) {
  }
  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          // this.id = +params['id'];
          this.tempID = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let userName = '';
    let userDate = '';

    if (this.editMode) {
      const user = this.usersService.getUser(this.tempID);
      userName = user.name;
      userDate = user.birthDate;
    }

    this.userForm = new FormGroup({
      'name': new FormControl(userName, Validators.required),
      'date': new FormControl(userDate, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.id = this.usersService.getUser(this.tempID).id;
      const user = new Users(this.id, this.userForm.value.name, this.userForm.value.date);
      this.usersService.updateUser(this.tempID, user);
      this.backend.updateUser(this.id, user);

    } else {
      const user = new Users(this.usersService.users.length, this.userForm.value.name, this.userForm.value.date);
      this.usersService.addUser(user);
      this.backend.saveUser(user);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
