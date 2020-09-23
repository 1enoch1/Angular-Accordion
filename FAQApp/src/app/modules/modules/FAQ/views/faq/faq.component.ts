import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as faqJson from 'src/assets/files/faqs.json';

interface FaqResult {
  id: number;
  question: string;
  answer: string;
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass'],
})
export class FAQComponent implements OnInit {
  faqResultList: FaqResult[] = (faqJson as any).default;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getJsonData();
  }

  getJsonData() {
    this.http
      .get(environment.localEnvironment + 'assets/files/faqs.json')
      .subscribe((data) => {
        console.log(data);
      });
  }

  getFaqHeader() {
    return 'HAVE A QUESTION? WE CAN HELP';
  }
}
