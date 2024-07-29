import { TestBed } from '@angular/core/testing';
import { VoiceToSpeechService } from './voice-to-speech.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should init service', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const initSpy = spyOn(app.service, 'init');
    app.ngOnInit();
    expect(initSpy).toHaveBeenCalledTimes(1);
  });
  it('setLang should call service setLang', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.setLang).toBeDefined();
    spyOn(app.service, 'setLang');
    app.setLang('abcd');
    expect(app.service.setLang).toHaveBeenCalledWith(
      jasmine.any(String)
    );
  });
  it('startService should call service start', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.startService).toBeDefined();
    spyOn(app.service, 'start');
    app.startService();
    expect(app.service.start).toHaveBeenCalled();
  });
  it('stopService should call service stop', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stopService).toBeDefined();
    const stopSpy = spyOn(app.service, 'stop');
    app.stopService();
    expect(app.service.stop).toHaveBeenCalled();
    expect(stopSpy).toHaveBeenCalledTimes(1);
  });
});
