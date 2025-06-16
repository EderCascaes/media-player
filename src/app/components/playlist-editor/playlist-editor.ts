import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.html',
  styleUrls: ['./playlist-editor.css']
})


export class PlaylistEditor {
  newMusicName = '';
  playlist: { name: string; src: string }[] = [];

  addMusic() {
    if (this.newMusicName.trim()) {
      const formattedName = this.newMusicName.trim();
      this.playlist.push({
        name: formattedName,
        src: `assets/musicas/${formattedName}.mp3`
      });
      this.newMusicName = '';
    }
  }
}
