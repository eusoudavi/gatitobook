import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environments';
import { Injectable } from '@angular/core';
import { Comentario, Comentarios } from './comentarios';

const API = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  buscarComentario(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  incluriComentario(id: number, commentText: string): Observable<Comentario>{
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`,
    commentText)
  }
}
