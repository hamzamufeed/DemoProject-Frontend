import {Users} from "./users.model";
import {Subject} from "rxjs";

export class UsersService {
  UserChanged = new Subject<Users[]>();
  users!: Users[];

  getUsers() {
    return this.users.slice();
  }

  setUsers(users: Users[]) {
    this.users = users;
    this.UserChanged.next(this.users.slice());
  }

  getUser(id: number) {
    return this.users[id];
  }

  addUser(user: Users) {
    this.users.push(user);
    this.UserChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: Users) {
    this.users[index] = newUser;
    this.UserChanged.next(this.users.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.UserChanged.next(this.users.slice());
  }

}
