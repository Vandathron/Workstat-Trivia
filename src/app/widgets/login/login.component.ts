import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  @Output('startCounting') counter: EventEmitter<string> = new EventEmitter();

  public userDetails = this.formBuilder.group({
    name: ['', [Validators.required]],
    id: [0, [Validators.required]]
  });


  //Saves user info to local storage if form field is correct
  public save(): void {
    if(!this.userDetails.valid) return;
    localStorage.setItem("activeUser", JSON.stringify(this.userDetails.value));
    this.router.navigate(["questions"])
  }
}
