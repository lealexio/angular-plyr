import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
//import * as Plyr from 'plyr';
var Plyr = require("plyr");

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //@ViewChild('videoDiv', {read: ViewContainerRef}) videoDivComponent;
  public player;

  ngOnInit() {
        this.player = new Plyr('#plyrID', { captions: { active: true } });
    // this.player = new Plyr(this.videoDivComponent.nativeElement, { captions: { active: true } });
  }
}
