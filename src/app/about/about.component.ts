import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
ngOnInit(): void {
  this.setTitle('Kevin D - About')
  var birthdayDate = new Date("June 21 2025");
  var newDate = new Date();
  var age = 19;
  if (newDate = birthdayDate) {
    var age = age + 1;
  }
  let ageString = age.toString();
  let newDateNumber = newDate.valueOf();
  //@ts-ignore
  document.getElementById("age").innerHTML = ageString;

  var birthday = setInterval(function() {
      var now = new Date().getTime();
      var distance = newDateNumber - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // @ts-ignore
      document.getElementById("countdown").innerHTML = "(in " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s" + ")";
      if (distance < 0) {
          clearInterval(birthday);
          //@ts-ignore
          document.getElementById("countdown").innerHTML = "(It's my birthday! 🥳)";
        }
  }, 1000);
  }
}

