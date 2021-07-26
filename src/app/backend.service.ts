import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "./users/users.service";
import {Users} from "./users/users.model";
import {Currency} from "./currency/currency.model";

@Injectable()
export class BackendService {

  constructor(private httpClient: HttpClient, private userService: UsersService) {
  }

  deleteUser(id: number) {
    return this.httpClient.delete('http://localhost:8200/users/'+id)
      .subscribe(
      (user) => {
        console.log(user);
      }
    );
  }

  saveUser(user: Users) {
    return this.httpClient.post('http://localhost:8200/users', user)
      .subscribe(
        (user) => {
          console.log(user);
        }
      );
  }

  updateUser(id: number, user: Users) {
    return this.httpClient.put('http://localhost:8200/users/'+user.id, user)
      .subscribe(
      (users) => {
        console.log(users);
      }
    );
  }

  getUsers() {
    return this.httpClient.get<Users[]>('http://localhost:8200/users')
      .subscribe(
        (users) => {
          console.log(users);
          this.userService.setUsers(users);
        }
    );
  }

  getUserCount() {
    return this.httpClient.get<number>('http://localhost:8200/count');
  }

  getUser(id: number) {
    return this.httpClient.get<Users[]>('http://localhost:8200/users/'+id)
      .subscribe(
        (user) => {
          console.log(user);
        }
      );
  }

  getMultiple(from: string, to: string) {
    return this.httpClient.get<Currency>('http://localhost:8000/currency-exchange/from/'+from+'/to/'+to);
  }

  getResult(from: string, to: string, amount: number) {
    return this.httpClient.get<Currency>('http://localhost:8100/currency-conversion-feign/from/'+from+'/to/'+to+'/quantity/'+amount);
  }
}
