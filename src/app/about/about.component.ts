import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();
  birthdayDate: Date = new Date("June 21 2022");
  datepipe: DatePipe = new DatePipe('en-US');
  formattedDate = this.datepipe.transform(this.birthdayDate.valueOf() - this.todayNumber, "(in " + "MM dd hh MM ss)");

  function (params:number) {
    this.formattedDate = this.datepipe.transform(this.birthdayDate.valueOf() - this.todayNumber, "(in " + "MM dd hh MM ss)");
  }
  constructor() { }

  ngOnInit(): void {
  }


}

