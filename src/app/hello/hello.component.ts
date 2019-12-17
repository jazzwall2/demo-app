import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit{

    @Input("user") userName: String;

    ngOnInit(){
        //this.userName = "John Smith";
    }

    doSomething(){
        console.log('Button Clicked');
    }

    // @Input() nameOfUser: string;

}