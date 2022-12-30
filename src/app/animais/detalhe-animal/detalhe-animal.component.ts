import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>

  constructor(
    private AnimaisService: AnimaisService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activateRoute.snapshot.params['animalID'];
    this.animal$ = this.AnimaisService.findById(this.animalId)
  }

  curtir(){
    this.AnimaisService.curtir(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.AnimaisService.findById(this.animalId);
      }
    })

  }

  excluir(){
    this.AnimaisService.excluirAnimal(this.animalId).subscribe(() => {
      this.router.navigate(['/animais/'])
    }, (error) => console.log(error));
  }
}
