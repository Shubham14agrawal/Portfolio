import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      //  var self = $(this);
      
      //   $(".blast").hover(function(){
      //     $(this).addClass("animated rubberBand");
      //   }, function() { 
      //     $(this).removeClass("animated rubberBand");       
      //   });
      
  }

}
