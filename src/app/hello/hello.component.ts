import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit{

    ngOnInit(){
        this.userName = "John Smith";
    }
    userName: String;

    doSomething(){
        console.log('Button Clicked');
    }

}