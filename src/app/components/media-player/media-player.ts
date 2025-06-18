import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.html',
  styleUrls: ['./media-player.css']
})
export class MediaPlayer implements OnChanges {
  @Input() playlist: { name: string; src: string | SafeResourceUrl }[] = [];
  @Output() limparSolicitado = new EventEmitter<void>();

  currentIndex = 0;
  currentMusic: { name: string; src: string | SafeResourceUrl } | null = null;

  
  constructor(private sanitizer: DomSanitizer) {}



  ngOnChanges(changes: SimpleChanges): void {
    if (changes.playlist && this.playlist.length > 0) {
      this.currentMusic = this.playlist[this.currentIndex];
    }
  }

  

onFolderSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const files = Array.from(input.files);
    files.forEach(file => {
      const url = URL.createObjectURL(file);
      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.playlist.push({ name: file.name, src: safeUrl });
    });

    if (!this.currentMusic) {
      this.playMusic(this.currentIndex);
    }
  }
}


 playMusic(index: number) {
  this.currentIndex = index;
  this.currentMusic = this.playlist[index];

  setTimeout(() => {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    audioPlayer.load();
    
    // Aguarda o evento indicando que o áudio está pronto para tocar
    audioPlayer.oncanplaythrough = () => {
      audioPlayer.play().catch(err => console.warn('Erro ao tocar áudio:', err));
    };
  }, 0);
}


  nextMusic() {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playMusic(this.currentIndex);
  }

  previousMusic() {
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playMusic(this.currentIndex);
  }

  limparPlaylist() {
    this.currentIndex = 0;
    this.currentMusic = null;
    this.playlist = [];
    this.limparSolicitado.emit(); 
  }


}
