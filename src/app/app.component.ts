import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo App';
  someNumber = 5;
  myInfo = 'this is some information';
  textAreaToggle = false;
  myName = "John Smith";
  showSomething(){
    console.log('something');
  }
  toggleTextArea(){
    console.log('toggle called');
    this.textAreaToggle = !this.textAreaToggle;
  }
}
