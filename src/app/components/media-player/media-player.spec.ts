import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaPlayer } from './media-player';



describe('MediaPlayer', () => {
  let component: MediaPlayer;
  let fixture: ComponentFixture<MediaPlayer>;


  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPlayer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


