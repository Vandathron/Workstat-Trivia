import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from, timer } from 'rxjs';
import { ResultDisplayerModalComponent } from '../widgets/result-displayer-modal/result-displayer-modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private matDialog: MatDialog
  ) { }

  @Output('timeOver') timeOver: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.startTimer();
  }

  //starts counting
  private startTimer(){
    const source = timer(0,1000);
    var t = source.subscribe(val => {
      var secs = this.timeLeft-val;
      const minutes = Math.floor((secs/60));
      const seconds = Math.floor(secs - (minutes*60));
      this.timeDisplayer = `${minutes} : ${seconds}`;

      //Alerts its parent when time is up
      if(minutes == 0 && seconds == 0){
        t.unsubscribe();
        this.timeOver.emit("TimeOver");
      }
    });
    
  }

  public timeLeft: number = 60*2; //5 minutes
  public timeDisplayer: string = "";
}
