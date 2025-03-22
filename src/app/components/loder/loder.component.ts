import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-loder',
  templateUrl: './loder.component.html',
  styleUrls: ['./loder.component.css']
})
export class LoderComponent implements OnInit {
  loaderImage:boolean=false;
  constructor() { }

  ngOnInit() {
      if(this.loaderImage){
        $(".ring-loader-wrap").fadeIn("slow");
      } else{
        $(".ring-loader-wrap").fadeOut("slow");
      }
    // $(window).load(function() {
      // Animate loader off screen
      
    // }
    // );

  }

}
