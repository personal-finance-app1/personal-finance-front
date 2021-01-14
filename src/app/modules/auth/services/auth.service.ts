import { Injectable, SystemJsNgModuleLoader } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(username:string,password:string){

    if(username == "username" && password == "password"){
       alert("You are logged in Successfully !! Sorry ... UnderConstruction ....!!!!")
      window.location.reload();
    }else{

      alert(" Sorry log in failed ... UnderConstruction ....!!!!")
      window.location.reload();
    }

  }
}
