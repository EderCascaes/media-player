import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
playlist: { name: string; src: string | SafeResourceUrl }[] = [];

title = 'Media Player ';

ngOnInit(): void {
  this.playlist = [
    { name: 'Diferentão', src: 'assets/musics/Dilsinho - Diferentão (Ao Vivo).mp3' },
    { name: 'Péssimo Negócio', src: 'assets/musics/Dilsinho - Péssimo Negócio (DVD Terra do Nunca Ao Vivo).mp3' },
    { name: 'Sou Pagodeiro', src: 'assets/musics/Dilsinho - Sou Pagodeiro (Love Yourself) (Ao Vivo).mp3' }
  ];
  
}

  adicionarNaPlaylist(musica: { name: string; src: string | SafeResourceUrl }) {
  this.playlist = [...this.playlist, musica];
}

}
