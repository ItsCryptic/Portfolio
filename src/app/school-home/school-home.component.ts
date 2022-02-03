import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.css']
})
export class SchoolHomeComponent implements OnInit {

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void {
    this.setTitle("Kevin D - School Portfolio");
  }

}
