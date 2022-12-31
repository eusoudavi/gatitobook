import { AnimaisService } from './../animais.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {
  formularioNovoAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(
    private animaidService: AnimaisService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formularioNovoAnimal = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const allowComments = this.formularioNovoAnimal.get('allowComments')?.value ?? false;
    const description = this.formularioNovoAnimal.get('description')?.value ?? '';

    this.animaidService.upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['animais'])))
      .subscribe((event: HttpEvent<any>) => {
        if(event.type == HttpEventType.UploadProgress){
          const total = event.total ?? 1;
          this.percentualConcluido = Math.round(100*(event.loaded / total));
        }
      },(error) => console.log(error)
      );
}

gravaArquivo(arquivo: any): void {
  const [file] = arquivo?.files;
  this.file = file;
  const reader = new FileReader();
  reader.onload = (event: any) => (this.preview = event.taget.result);
  reader.readAsDataURL(file);
}

}
