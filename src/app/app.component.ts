import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoiceToSpeechService } from './voice-to-speech.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [VoiceToSpeechService],
})
export class AppComponent implements OnInit {
  isStillRecoginze = false;
  constructor(public service: VoiceToSpeechService) {
    this.service.init();
  }
  ngOnInit(): void { }
  startService() {
    this.isStillRecoginze = this.service.start() === true ? true : false;
  }

  stopService() {
    this.isStillRecoginze = this.service.stop() === false ? false : true;
  }
}