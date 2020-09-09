import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})


export class FAQComponent implements OnInit {
  faqResults: any = [];
  // place URL in a variable within a service
  
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getJsonData();
  }
  
  getJsonData(){
    this.http.get("http://localhost:5200/assets/files/faqs.json").subscribe(data =>{
      console.log(data);
      this.faqResults = data;
  });
}

  // should use the index to toggle between accordion
  getAccordianToggle(){}

}
