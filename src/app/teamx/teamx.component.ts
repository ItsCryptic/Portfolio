import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-teamx',
  templateUrl: './teamx.component.html',
  styleUrls: ['./teamx.component.css']
})
export class TeamxComponent implements OnInit {

  public constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.setTitle("Kevin D - TeamX Demo")
  }

}
