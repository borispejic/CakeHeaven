import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactMessages } from 'src/app/model/messages.model';
import { User } from 'src/app/model/user.model';
import { CakeserviceService } from 'src/app/services/cakeservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  user: User = new User();
  message: ContactMessages = new ContactMessages();

  constructor(private service: CakeserviceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUser().subscribe((user: User) => {
      this.user = user;
      this.message.name = this.user.firstName + ' ' + this.user.lastName;
      this.message.email = this.user.email;
    });
  }

  onSendClicked(): void {
    this.service
      .postMessage(this.message)
      .subscribe((message: ContactMessages) => {
        this.router.navigate(['/home']);
      });
  }
}
