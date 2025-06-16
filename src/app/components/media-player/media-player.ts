import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.html',
  styleUrls: ['./media-player.css']
})
export class MediaPlayer implements OnChanges {
  @Input() playlist: { name: string; src: string | SafeResourceUrl }[] = [];

  currentIndex = 0;
  currentMusic: { name: string; src: string | SafeResourceUrl } | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.playlist && this.playlist.length > 0) {
      this.currentMusic = this.playlist[this.currentIndex];
    }
  }

  playMusic(index: number) {
    this.currentIndex = index;
    this.currentMusic = this.playlist[index];
    setTimeout(() => {
      const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
      audioPlayer.load();
      audioPlayer.play();
    }, 50);
  }

  nextMusic() {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playMusic(this.currentIndex);
  }

  previousMusic() {
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playMusic(this.currentIndex);
  }
}
