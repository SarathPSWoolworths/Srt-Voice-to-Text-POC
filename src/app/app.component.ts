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
  counter = 0;
  constructor(public service: VoiceToSpeechService) {
  }
  ngOnInit(): void {
    this.service.init();
  }
  setLang(lang: string) {
    this.service.setLang(lang);
  }
  startService() {
    this.service.text = '';
    this.isStillRecoginze = this.service.start();
  }
  stopService() {
    this.isStillRecoginze = this.service.stop();
  }
}
