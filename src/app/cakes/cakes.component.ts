import { Component, OnInit } from '@angular/core';
import { CakesList } from '../model/cakes.model';
import { CakeserviceService } from '../services/cakeservice.service';

@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css'],
})
export class CakesComponent implements OnInit {
  cakes: CakesList[] = [];
  ingredients: string[] = [];

  params = {
    sort: 'name',
    sortDirection: 'asc',
    filter: {
      ingredients: '',
    },
  };

  constructor(private service: CakeserviceService) {}

  ngOnInit(): void {
    this.getCakes();
    this.getIngredients();
  }

  getCakes(): void {
    this.service.getCakes(this.params).subscribe((cakes: CakesList[]) => {
      this.cakes = cakes;
    });
  }

  getIngredients() {
    this.service.getIngredients().subscribe((ingredients: string[]) => {
      this.ingredients = ingredients;
    });
  }

  onIngredientChange(event: Event) {
    this.params.filter.ingredients = (event.target as HTMLInputElement).value;
    this.getCakes();
  }
}
