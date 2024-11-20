import { Component } from '@angular/core';
import { CreateCards } from '../../../shared/CreateCards';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  cards!: CreateCards[];

  constructor(){
    this.cards = [
      {
        id: 1,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 2,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 3,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 4,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 5,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 6,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 7,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 8,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 9,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
      {
        id: 10,
        title: "Shakti",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      },
    ];
  }

  trackfn(item: any): any{
    return item.id;
  }
}

