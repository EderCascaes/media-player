import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayer {
  playlist: { name: string; src: string }[] = [];
  currentIndex = 0;
  currentMusic: { name: string; src: string } | null = null;

}
