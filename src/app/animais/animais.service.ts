import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Animais as Animals, Animal } from './animais';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${nomeDoUsuario}/photos`);
  }

  findById(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${API}/photos/${id}`)
  }
}
