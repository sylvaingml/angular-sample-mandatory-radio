import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  options = [
    {name: 'Angular', value: 1}, 
    {name: 'React', value: 2}, 
    {name: 'Vue', value: 3}
  ];

  framework: number = null;

  warningId: string = 'options-warning';
  optionDescription: string = this.warningId;

  public reset(event: MouseEvent): void {
    this.framework = null;
  }
}
