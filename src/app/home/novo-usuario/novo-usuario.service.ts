import { environment } from './../../../environments/environments.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

const API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpCLiente: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpCLiente.post(`${API}/user/signup`, novoUsuario)
  }
  verificaUsuarioExistente(nomeUsuario: string) {
    return this.httpCLiente.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
