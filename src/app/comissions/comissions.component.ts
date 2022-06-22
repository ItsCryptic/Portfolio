import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comissions',
  templateUrl: './comissions.component.html',
  styleUrls: ['./comissions.component.css']
})
export class ComissionsComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle("Kevin D - Comissions");
  }

}
