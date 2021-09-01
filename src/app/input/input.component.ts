import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name:string = "";
  dept:string = "";

  constructor(private details:DetailsService) { }
  

  ngOnInit(): void {
  }

  submit(){
    // alert("hellp");
    this.details.name = this.name;
    this.details.dept = this.dept;

  }

}
