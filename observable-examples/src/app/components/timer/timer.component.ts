import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  seconds: number = 0

  secondsCounter = interval(1000);
  subscription = this.secondsCounter.subscribe(n => {
      this.seconds = (n+1)
  }
  );

}
