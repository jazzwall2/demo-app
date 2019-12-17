import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo App';

  myName = "John Smith";

  onHelloChange(event: string){
    this.myName = event;
  }

}
