import { Component, OnInit } from '@angular/core';
declare var TagCanvas: any;
import "../../../assets/tagcanvas.min.js" ;
import * as $ from "jquery";
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
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


      // window.onload = function() {
        try {
          
          TagCanvas.Start('myCanvas','tags',{
            textFont: 'Arial, Helvetica, sans-serif', maxSpeed: 0.08, minSpeed: 0.01,
    textColour: '#08fdd8',  
    depth: 0.97, minBrightness: 0.2,
    reverse: true, shadowBlur: 2, shuffleTags: true,
    shadowOffset: [1,1],  initial: [0,0.1], clickToFront: 600,
           
          });
        } catch(e) {
          // something went wrong, hide the canvas container
          const element = document.getElementById('myCanvasContainer')!;

if(element){
  
  element.style.display = 'none';
}
        }
      // };
      
  }
}
