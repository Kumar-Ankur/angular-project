import { Component, OnInit } from '@angular/core';
import { TimerService } from '../service-timer.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  pausedTime: number[] = [];
  text = '';
  constructor(private timerService: TimerService) {}

  ngOnInit(): void {}

  // Function to set the input value once user entered value in input field
  onSelectedInput(event: any): void {
    this.text = '';
    this.timerService.onInputSelected(event);
  }

  /**
   * function { handleStartPause}
   * description: function to check if user clicked on start/pause button and call the service to update teh state respectively
   */
  handleStartPause(): void {
    this.timerService.handleButton();
    this.timerService.TimerServiceWithSubject.subscribe((value) => {
      this.pausedTime = value.pausedTime;
    });
    this.text = '';
  }

  // Function called when user clicked on reset button, to update the state to initial state
  handleReset(): void {
    this.timerService.handleReset();
    this.text = '';
  }

  // Return true/false to check if user is able to see start/pause button.
  IsStartVisible(): boolean {
    return this.timerService.IsStartVisible();
  }

  // Reset all the state to its initial value, if user clicked on reset button or change the value in input field.
  setToInitialState(): void {
    this.timerService.setToInitialState();
  }
}
