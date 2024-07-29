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
    expect(service.init).toBeDefined();
    expect(service.start).toBeDefined();
    expect(service.stop).toBeDefined();
    expect(service.wordConcat).toBeDefined();
  });
  it('should have setLang', () => {
    expect(service.setLang).toBeTruthy();
    service.setLang('abc');
    service.setLang(undefined);
  });
  it('should have wordConcat', () => {
    expect(service.wordConcat).toBeTruthy();
    service.text = '1'
    service.tempWords = '1'
    service.wordConcat();
    expect(service.text).toEqual('1 1');
    expect(service.tempWords).toEqual('');
  });
  it('should have start', () => {
    expect(service.start).toBeTruthy();
    service.start();
  });
  it('should have result end and init', () => {
    expect(service.init()).toBeTruthy();
    expect(service.start()).toBeTruthy();
    expect(service.stop()).toBeFalsy();
  });
  it('should have resultListner', () => {
    expect(service.resultListner({ "results": [[{ "confidence": ".910", "transcript": "test" }]] })).toBeTruthy();
  });
  it('should have endListner', () => {
    expect(service.endListner(null)).toBeTruthy();
  });
});
