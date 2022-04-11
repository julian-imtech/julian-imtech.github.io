import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() number: string = '';
  @Input() name: string = '';
  @Input() mont: string = '';
  @Input() year: string = '';
  @Input() brand: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
