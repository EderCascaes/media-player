import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaPlayer } from './components/media-player/media-player';
import { PlaylistEditor } from './components/playlist-editor/playlist-editor';
import { FormsModule } from '@angular/forms';
import { UploadMusicComponent } from './components/upload-music/upload-music.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaPlayer,
    PlaylistEditor,
    UploadMusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
