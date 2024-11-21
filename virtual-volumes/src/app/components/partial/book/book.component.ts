import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  currentState: number = 1;
  numOfPapers: number = 3;
  maxState: number = this.numOfPapers + 1;

  // Get references to the DOM elements (can use ViewChild in Angular, but let's use template refs)
  prevBtnTransform: string = 'translateX(0px)';
  nextBtnTransform: string = 'translateX(0px)';
  bookTransform: string = 'translateX(0%)';

  bookPages!: any;

  constructor() { }

  ngOnInit(): void {
    this.bookPages = [
      {
        page: 1,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 2,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 3,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 4,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 5,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 6,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 7,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 8,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 9,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 10,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 11,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 12,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 13,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 14,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 15,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 16,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 17,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 18,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 19,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 20,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 21,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 22,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 23,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 24,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 25,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 26,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 27,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 28,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        page: 29,
        front: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        back: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
    ];
  }

  // Open the book (simulate opening animation)
  openBook(): void {
    this.bookTransform = 'translateX(50%)';
    this.prevBtnTransform = 'translateX(-180px)';
    this.nextBtnTransform = 'translateX(180px)';
  }

  // Close the book (simulate closing animation)
  closeBook(isFirstPage: boolean): void {
    if (isFirstPage) {
      this.bookTransform = 'translateX(0%)';
    } else {
      this.bookTransform = 'translateX(100%)';
    }
    this.prevBtnTransform = 'translateX(0px)';
    this.nextBtnTransform = 'translateX(0px)';
  }

  // Go to the next page
  goNext(): void {
    if (this.currentState < this.maxState) {
      switch (this.currentState) {
        case 1:
          this.openBook();
          break;
        case 2:
          this.flipPage(2);
          break;
        case 3:
          this.closeBook(false);
          this.flipPage(3);
          break;
        default:
          throw new Error("Unknown state");
      }
      this.currentState++;
    }
  }

  // Go to the previous page
  goPrevious(): void {
    if (this.currentState > 1) {
      switch (this.currentState) {
        case 2:
          this.closeBook(true);
          this.flipBack(1);
          break;
        case 3:
          this.flipBack(2);
          break;
        case 4:
          this.openBook();
          this.flipBack(3);
          break;
      }
      this.currentState--;
    }
  }

  // Flip page logic
  flipPage(pageIndex: number): void {
    const page = document.querySelector(`#p${pageIndex}`) as HTMLElement;
    page.classList.add('flipped');
    page.style.zIndex = pageIndex.toString();
  }

  // Flip back logic
  flipBack(pageIndex: number): void {
    const page = document.querySelector(`#p${pageIndex}`) as HTMLElement;
    page.classList.remove('flipped');
    page.style.zIndex = (this.numOfPapers + 1 - pageIndex).toString();
  }

  // Dynamically calculate z-index based on current page state
  getZIndex(pageIndex: number): number {
    if (this.currentState >= pageIndex) {
      return this.numOfPapers - (this.currentState - pageIndex);
    }
    return this.numOfPapers + 1;
  }
}
