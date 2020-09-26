import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IResult } from 'src/app/models/iResult';

@Component({
  selector: 'app-result-displayer-modal',
  templateUrl: './result-displayer-modal.component.html',
  styleUrls: ['./result-displayer-modal.component.scss']
})
export class ResultDisplayerModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public result: IResult, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  public close(): void {
    localStorage.clear();
    this.dialog.closeAll();
    this.router.navigate(['login']);
  }
}
