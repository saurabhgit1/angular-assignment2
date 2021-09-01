import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  name:string = "";
  dept:string = "";

  constructor(private details:DetailsService) {}
  

  ngOnInit(): void {

    this.name = this.details.name;
    this.dept = this.details.dept;
  }

}
