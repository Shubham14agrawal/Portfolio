import { Component ,AfterViewInit} from '@angular/core';
import { 
  Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfol';
  loading:boolean=true;
  constructor(
    private router: Router
) {
    this.loading = true;
}

ngAfterViewInit() {
  this.router.events
      .subscribe((event) => {
          if(event instanceof NavigationStart) {
              this.loading = true;
              $(".ring-loader-wrap").fadeIn("slow");
          }
          else if (
              event instanceof NavigationEnd || 
              event instanceof NavigationCancel
              ) {
              // setTimeout(function() {
                  $(".ring-loader-wrap").fadeOut("slow");
                 
                  this.loading = false;
                 
            // },1000);
           
          }
      });
    } 
}
