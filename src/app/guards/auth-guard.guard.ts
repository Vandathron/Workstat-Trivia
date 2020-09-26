import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  //makes sure user enters name and ID before answering trivia
  canActivate(): boolean {
    if(localStorage.getItem("activeUser") == null){
        this.router.navigate(["login"]);
    };
    return true;
  }
}