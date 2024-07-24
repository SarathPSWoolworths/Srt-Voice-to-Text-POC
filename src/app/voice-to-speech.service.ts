import { Injectable } from '@angular/core';
declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceToSpeechService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text: string = '';
  public status: string[] = [];
  tempWords: any = '';
  transcript_arr: any = [];
  confidence_arr: any = [];
  isStarted = false;
  isStoppedAutomatically = true;
  constructor() { }

  init(lang: string = 'en-IN') {
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = lang;

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.transcript_arr.push(transcript);
      this.tempWords = transcript;
      this.status.push('Transcript Text: ' + this.transcript_arr);

      const confidence: any = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.confidence)
        .join('');
      let confidence_score: string = (parseFloat(confidence) * 100).toFixed(2) + ' %';
      this.confidence_arr.push(confidence_score);
      this.status.push('Confidence Score : ' + this.confidence_arr);
    });

    this.recognition.addEventListener('end', (condition: any) => {
      this.wordConcat();
      if (this.isStoppedAutomatically) {
        this.recognition.stop();
        this.status.push('stopped automatically!!');
        this.recognition.start();
        this.status.push('started automatically!!');
        this.isStoppedAutomatically = true;
      }
    });
  }

  start() {
    if (!this.isStarted) {
      this.recognition.start();
      this.isStarted = true;
      this.status.push('Speech recognition started');
    }
    return true;
  }
  stop() {
    if (this.isStarted) {
      this.isStoppedAutomatically = false;
      this.wordConcat();
      this.recognition.stop();
      this.isStarted = false;
      this.status.push('End speech recognition by user');
    }
    return false;
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords;
    this.tempWords = '';
  }
}
