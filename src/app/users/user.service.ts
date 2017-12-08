import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private http: Http) {

  }
  getUsers() {
    return this.http.get("http://localhost:3000/user")
    .map(res=>res.json());
  }
  deleteUser(name){
    return this.http.delete("http://localhost:3000/user/" + name)
    .map(res => res.json());
  }
}
