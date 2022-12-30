import { switchMap, tap } from 'rxjs/operators';
import { ComentariosService } from './comentarios.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comentarios } from './comentarios';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentariosService: ComentariosService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscarComentario(this.id);
    this.comentarioForm = this.formBuilder.group({comentario: ['', Validators.maxLength(300) ]});
  }

  gravar(): void{
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService.incluriComentario(this.id, comentario
      ).pipe(
        switchMap(() => this.comentariosService.buscarComentario(this.id)),
        tap(() => {
          this.comentarioForm.reset();
          alert('Comentário Salvo')
        })
        );
  }

}
