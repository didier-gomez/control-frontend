import {Injectable} from "@angular/core";
import {Http, Response,Headers,RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {ENV} from "../../env";

@Injectable()
export class UserService {
  constructor(private http: Http) {

  }
  getUsers() {
    return this.http.get(ENV.API + "/user")
    .map(res=>res.json());
  }
  deleteUser(name){
    return this.http.delete(ENV.API +"/user/" + name)
    .map(res => res.json());
  }
  createUser(user){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers:headers });
    return this.http.post(ENV.API + "/user/", user, options)
    .map(res => res.json());
  }
}
