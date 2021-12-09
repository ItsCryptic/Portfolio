import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
<<<<<<< HEAD
=======

>>>>>>> 4b077e1244e8c9917109113d69c336378a768a17
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

<<<<<<< HEAD
  function (params:number) {
    this.formattedDate = this.datepipe.transform(this.birthdayDate.valueOf() - this.todayNumber, "(in " + "MM dd hh MM ss)");
  }
=======
/*  public countdown: any = setInterval(() => {
    this.birthdayDate.valueOf() - this.todayNumber, "(in " + "MM dd hh MM ss)"
  }, 500);*/
>>>>>>> 4b077e1244e8c9917109113d69c336378a768a17
  constructor() { }

  ngOnInit(): void {
  }


}

