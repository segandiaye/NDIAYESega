import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    numbers : number[] = [];
    numbers2 : number[] = [];

    constructor() {
        for(let i=0;  i<8; i++){
          this.numbers.push(i);
        };
    }
    ngOnInit() { }
    drop(event: CdkDragDrop<number[]>){
        moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
}
