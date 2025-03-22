import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { StoreService} from '../../store.service'
import{ Contact} from '../../models/contact'

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {

  name: string ='';
  email: string='';
  subject: string='';
  message: string='';

  constructor(private dataService: StoreService) {}

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

  onSubmit() {
    
    const submission: Contact = {
      name: this.name,
      emailId: this.email,
      subject: this.subject,
      message: this.message
    };
    this.dataService.addContact(submission);
     // reset the input fields
     this.name = '';
     this.email = '';
     this.subject = '';
     this.message = '';
  }
}
