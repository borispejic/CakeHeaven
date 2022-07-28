import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CakesList } from 'src/app/model/cakes.model';
import { CakeserviceService } from 'src/app/services/cakeservice.service';

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css'],
})
export class CakedetailComponent implements OnInit {
  cakeId: number = -1;
  cake: CakesList = new CakesList();

  constructor(
    private route: ActivatedRoute,
    private service: CakeserviceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cakeId = params['id'];
      this.getCake();
    });
  }

  getCake() {
    this.service.getOne(this.cakeId).subscribe((cake: CakesList) => {
      this.cake = cake;
      console.log(this.cake);
    });
  }
}
