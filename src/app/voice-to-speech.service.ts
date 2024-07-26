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
  language: string = 'en-IN';
  tempWords: any = '';
  transcriptText: any = '';
  confidenceScore: any = '';
  isStarted = false;
  // isStoppedAutomatically = true;
  constructor() { }
  public setLang(lang: string = 'en-IN') {
    this.language = lang;
    this.recognition.lang = this.language;
  }
  resultListner = (e: any) => {
    //console.log('resultListner', Array.from(e.results)[0]);
    const transcript = Array.from(e.results)
      .map((result: any) => result[0])
      .map((result) => result.transcript)
      .join('');
    this.transcriptText = (transcript);
    this.tempWords = transcript;
    this.status.push('Transcript Text : ' + this.transcriptText);
    const confidence: any = Array.from(e.results)
      .map((result: any) => result[0])
      .map((result) => result.confidence)
      .join('');
    let confidence_score: string = (parseFloat(confidence) * 100).toFixed(2) + ' %';
    this.confidenceScore = (confidence_score);
    this.status.push('Confidence Score : ' + this.confidenceScore);
  }
  endListner = (e: any) => {
    //console.log('endListner', e);
    this.wordConcat();
    // if (this.isStoppedAutomatically) {
    //   this.recognition.stop();
    //   this.status.push('Speech recognition stopped automatically!!');
    //   this.recognition.start();
    //   this.status.push('Speech recognition automatically!!');
    //   this.isStoppedAutomatically = true;
    // }
  }
  init() {
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = this.language;
    this.recognition.addEventListener('result', this.resultListner);
    this.recognition.addEventListener('end', this.endListner);
    return true;
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
      // this.isStoppedAutomatically = false;
      this.wordConcat();
      this.recognition.stop();
      this.isStarted = false;
      this.status.push('Speech recognition stopped by user');
    }
    return false;
  }
  wordConcat() {
    this.text = this.text + ' ' + this.tempWords;
    this.tempWords = '';
  }
}
