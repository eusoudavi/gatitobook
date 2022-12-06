import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  user$ = this.ususarioService.retornaUsuario();

  constructor(
    private ususarioService: UsuarioService,
    private router: Router) { }

  logout(){ 
    this.ususarioService.logout();
    this.router.navigate(['']);
  }

}
