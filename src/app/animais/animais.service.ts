import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { TokenService } from '../autenticacao/token.service';
import { Animais as Animals, Animal } from './animais';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animals> {
    return this.http.get<Animals>(`${API}/${nomeDoUsuario}/photos`);
  }

  findById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`)
  }

  excluirAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${API}/photos/${id}`)
  }

  curtir(id: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(mapTo(true), catchError((error) => {
        return error.status === NOT_MODIFIED ? of(false) : throwError(error);
      })
      )
  }

  upload(descricacao: string, permiteComentario: boolean, arquivo: File) {
    const formData = new FormData(); // AQUI VAMOS UTILIZAR O MÉTODO DO JS PARA COLOCAR UM ARQUIVO BINÁRIO DENTRO DA REQUISIÇÃO DO ANGULAR
    formData.append('description', descricacao);
    formData.append('allowComments', permiteComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true,
    })

  }

}
