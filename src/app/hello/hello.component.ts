import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    @Input("user") userName: String;

    @Output() userNameChange = new EventEmitter();

    doSomething(){
        console.log('Button Clicked');
    }

    onUserNameChange(){
        this.userNameChange.emit(this.userName);
    }

}