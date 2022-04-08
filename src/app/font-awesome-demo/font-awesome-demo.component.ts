import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FaLayersCounterComponent } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-font-awesome-demo',
  templateUrl: './font-awesome-demo.component.html',
  styleUrls: ['./font-awesome-demo.component.css']
})
export class FontAwesomeDemoComponent implements OnInit {
  icon=[
    {fas},{faArrowUp},{FaLayersCounterComponent}
  ]
   ;
  constructor() { }

  ngOnInit(): void {
  }

}
