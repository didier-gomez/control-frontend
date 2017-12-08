import {Injectable} from "@angular/core";
import {Http, Response,Headers,RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private http: Http) {

  }
  getUsers() {
    return this.http.get("http://192.168.1.66:3000/user")
    .map(res=>res.json());
  }
  deleteUser(name){
    return this.http.delete("http://192.168.1.66:3000/user/" + name)
    .map(res => res.json());
  }
  createUser(name,password){
  var dato = {
  "name":name,
  "password":password
  };
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions ({ headers:headers });
  return this.http.post("http://192.168.1.66:3000/user/",dato,options)
  .map(res => res.json());
  }
}
