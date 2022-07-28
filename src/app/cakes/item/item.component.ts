import { Component, Input, OnInit } from '@angular/core';
import { CakesList } from 'src/app/model/cakes.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input()
  cake: CakesList = new CakesList();

  constructor() {}

  ngOnInit(): void {}
}
