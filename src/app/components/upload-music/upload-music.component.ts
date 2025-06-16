import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-music',
  templateUrl: './upload-music.component.html',
  styleUrls: ['./upload-music.component.css']
})


export class UploadMusicComponent {
@Output() musicaSelecionada = new EventEmitter<{ name: string, src: string | SafeResourceUrl }>();


  audioUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files.length) {
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.musicaSelecionada.emit({ name: file.name, src: safeUrl });
  }
}
}
