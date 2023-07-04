import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spider-home',
  templateUrl: './spider-home.component.html',
  styleUrls: ['./spider-home.component.css']
})
export class SpiderHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addEventListenersToCards();
  }

  handleMouseEnter(this: HTMLElement): void {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
  }

  handleMouseLeave(this: HTMLElement): void {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
  }

  addEventListenersToCards(): void {
    const cardElements = document.getElementsByClassName('s-card');

    for (let index = 0; index < cardElements.length; index++) {
      const card = cardElements[index] as HTMLElement;
      card.addEventListener('mouseenter', this.handleMouseEnter.bind(card));
      card.addEventListener('mouseleave', this.handleMouseLeave.bind(card));
    }
  }

  selectCarouselItem(selectedButtonElement: EventTarget | null): void {
    if (selectedButtonElement instanceof HTMLElement) {
      const selectedItem = selectedButtonElement.id;
      const carousel = document.querySelector('.s-cards-carousel') as HTMLElement;
      const transform = carousel.style.transform;
      const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
      const rotateYDeg = -120 * (Number(selectedItem) - 1);
      const newTransform = transform.replace(rotateY![0], `rotateY(${rotateYDeg}deg)`);

      carousel.style.transform = newTransform;

      const activeButtonElement = document.querySelector('.s-controller__button--active') as HTMLElement;
      activeButtonElement.classList.remove('s-controller__button--active');
      selectedButtonElement.classList.add('s-controller__button--active');
    }
  }
}
