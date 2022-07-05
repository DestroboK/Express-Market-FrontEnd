import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../../../../assets/scripts/config.json', null);
  }

}
