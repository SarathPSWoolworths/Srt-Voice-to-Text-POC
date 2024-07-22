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
});
