import { Component, OnInit } from '@angular/core';
import { Slideshow } from 'src/app/model/slideshow.model';
import { CakeserviceService } from 'src/app/services/cakeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slideshow: Slideshow[] = [];

  constructor(private service: CakeserviceService) {}

  ngOnInit(): void {
    this.service.getSlideShow().subscribe((slideshow: Slideshow[]) => {
      this.slideshow = slideshow;
    });
  }
}
