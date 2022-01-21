import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle('Kevin D - Home');
    var date = new Date();
    var month = date.getMonth();
    var pridemonth = document.getElementById("pride-month");

    if (month == 5) {
     //@ts-ignore
     pridemonth.style.background = `linear-gradient(90deg, #f00, #ff2b00, #f50, #ff8000, #fa0, #ffd500, #ff0, #d4ff00, #af0, #80ff00, #5f0, #2bff00, #0f0, #00ff2b, #0f5, #00ff80, #0fa, #00ffd5, #0ff, #00d4ff, #0af, #007fff, #05f, #002bff, #00f, #2a00ff, #50f, #7f00ff, #a0f, #d400ff, #f0f, #ff00d4, #f0a, #ff0080, #f05, #ff002b, #f00)`;
     //@ts-ignore
     pridemonth.style.color = `#0000`;
     //@ts-ignore
     pridemonth.style.backgroundClip = `text`;
     //@ts-ignore
     pridemonth.style.fontWeight = `bold`;
     //@ts-ignore
     pridemonth.style.display = `inline-block`;
     //@ts-ignore
     pridemonth.innerHTML = 'Happy Pride Month!';
     //@ts-ignore
     pridemonth.style.fontSize = `30px`;
    }

  }

}
