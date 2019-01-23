import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  names: string[] = [];
  isChat: boolean = false;
  isNotification: boolean = false;

  numbers = [
    {
      name : 'TOTO Toto',
      stat : 'En formation',
      inline : '0',
      id : 0
    },
    {
      name : 'TATA Tata',
      stat : 'Ancien',
      inline : '1',
      id : 1
    },
    {
      name : 'TITI Titi',
      stat : 'En formation',
      inline : '2',
      id : 2
    },
    {
      name : 'TETE Tete',
      stat : 'Ancien',
      inline : '3',
      id : 3
    },
    {
      name : 'TOUTOU Toutou',
      stat : 'En formation',
      inline : '4',
      id : 4
    },
    {
      name : 'TYTY Tyty',
      stat : 'Ancien',
      inline : '3',
      id : 4
    }
  ];
  numbers2 = [];

  constructor() {
    /*
    for(let i=0;  i<; i++){
      this.numbers.push(i);
    };*/
    //this.numbers = numbers_;
  }

  ngOnInit() {
  }

  chat() {
    this.isNotification = false;
    this.isChat = true;
  }

  notification() {
    this.isChat = false;
    this.isNotification = true;
  }

  drop(event: CdkDragDrop<[]>){
    if(event.previousContainer !== event.container){
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }else{
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
  }
}
