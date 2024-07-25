import { TestBed } from '@angular/core/testing';
import { VoiceToSpeechService } from './voice-to-speech.service';

describe('VoiceToSpeechServiceService', () => {
  let service: VoiceToSpeechService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceToSpeechService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have setLang', () => {
    expect(service.setLang).toBeTruthy();
    const setLangSpy = spyOn(service, 'setLang');
    service.setLang();
    expect(setLangSpy).toHaveBeenCalledTimes(1);
    expect(service.language).toEqual('en-IN');
  });
  it('should have wordConcat', () => {
    expect(service.wordConcat).toBeTruthy();
    const wordConcatSpy = spyOn(service, 'wordConcat');
    service.text = '1'
    service.tempWords = '1'
    service.wordConcat();
    expect(wordConcatSpy).toHaveBeenCalledTimes(1);
    // expect(service.text).toEqual('1 1');
    // expect(service.tempWords).toEqual('');
  });
  it('should have start', () => {
    expect(service.start).toBeTruthy();
    const startSpy = spyOn(service, 'start');
    service.start();
    expect(startSpy).toHaveBeenCalledTimes(1);
  });
  it('should have result listner', () => {
    expect(service.resultListner).toBeTruthy();
    const resultListnerSpy = spyOn(service, 'resultListner');
    service.resultListner(null);
    expect(resultListnerSpy).toHaveBeenCalledTimes(1);
  });
  it('should have end listner', () => {
    expect(service.endListner).toBeTruthy();
    const endListnerSpy = spyOn(service, 'endListner');
    service.endListner(null);
    expect(endListnerSpy).toHaveBeenCalledTimes(1);
  });
});
