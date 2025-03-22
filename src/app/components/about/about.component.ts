import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $(document).ready(
      function(){
      //setTimeout(function(){
      // $(".blast").css("opacity", "1");
       $(".container").css("opacity", "1");
      // }, 3000);
        $('.blast').each(function(i){
            var row = $(this);
          setTimeout(function() {
                  row.toggleClass('animated rubberBand', !row.hasClass('animated rubberBand'));
              }, 270*i);
           setTimeout(function() {
                  row.css("opacity", "1");
              }, 270*i);
      
      setTimeout(function() {
                  row.removeClass("animated rubberBand");
              }, 500*i);
        });
       
      
        
        
      });
  }

}
