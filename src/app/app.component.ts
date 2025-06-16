import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
playlist: { name: string; src: string | SafeResourceUrl }[] = [];

title = 'mediaPlayer';

ngOnInit(): void {
  this.playlist = [
    { name: 'Música 1', src: 'assets/musics/Dilsinho - Diferentão (Ao Vivo).mp3' },
    { name: 'Música 2', src: 'assets/musics/Dilsinho - Péssimo Negócio (DVD Terra do Nunca Ao Vivo).mp3' },
    { name: 'Música 3', src: 'assets/musics/Dilsinho - Sou Pagodeiro (Love Yourself) (Ao Vivo).mp3' }
  ];
  
}

  adicionarNaPlaylist(musica: { name: string; src: string | SafeResourceUrl }) {
  this.playlist = [...this.playlist, musica];
}

}
