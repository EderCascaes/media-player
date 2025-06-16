import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-music',
  templateUrl: './upload-music.component.html',
  styleUrls: ['./upload-music.component.css']
})
export class UploadMusicComponent {
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;
  @Output() musicaSelecionada = new EventEmitter<{ name: string; src: string }>();

  adicionarMusica(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach(file => {
        const musica = {
          name: file.name,
          src: URL.createObjectURL(file) // URL temporária
        };
        this.musicaSelecionada.emit(musica); // envia para o pai
      });
    }
  }
}
