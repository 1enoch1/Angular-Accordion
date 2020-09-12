import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass'],
})
export class FAQComponent implements OnInit {
  faqResults: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getJsonData();
  }

  getJsonData() {
    this.http
      .get(environment.localEnvironment + 'assets/files/faqs.json')
      .subscribe((data) => {
        console.log(data);
        this.faqResults = data;
      });
  }

  getFaqHeader() {
    return 'HAVE A QUESTION? WE CAN HELP';
  }
}
