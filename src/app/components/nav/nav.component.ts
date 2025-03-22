import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  audioPlayer!: HTMLAudioElement;
  audioUrl = '../../../assets/sound.mp3';
  isPlaying = false;
  constructor() { 
    this.audioPlayer = new Audio(this.audioUrl);
    this.audioPlayer.addEventListener('ended', () => {
      this.isPlaying = false;
    });
  }

  ngOnInit() {

    $("#mobile-link").click(function() {
      $(".jq-menu").toggleClass("active");
  });


  }

  toggleAudio(): void {
    if (this.isPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }

}
