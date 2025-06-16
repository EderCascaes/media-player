import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.html',
  styleUrls: ['./media-player.css']
})




export class MediaPlayer {
currentIndex = 0;
playlist = [
  { name: 'Música 1', src: 'assets/musics/Dilsinho - Diferentão (Ao Vivo).mp3' },
  { name: 'Música 2', src: 'assets/musics/Dilsinho - Péssimo Negócio (DVD Terra do Nunca Ao Vivo).mp3' },
  { name: 'Música 3', src: 'assets/musics/Dilsinho - Sou Pagodeiro (Love Yourself) (Ao Vivo).mp3' }
];

  currentMusic = this.playlist[this.currentIndex];
  currentTime = 0;
  duration = 0;

  playMusic(index: number) {
    this.currentIndex = index;
    this.currentMusic = this.playlist[index];

    // Reinicia o áudio quando muda a música
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
    this.currentIndex =
      (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playMusic(this.currentIndex);
  }

  updateTime(audio: HTMLAudioElement) {
    this.currentTime = audio.currentTime;
  }

  setDuration(audio: HTMLAudioElement) {
    this.duration = audio.duration;
  }

  formatTime(seconds: number): string {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }
}