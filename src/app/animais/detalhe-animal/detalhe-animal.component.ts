import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute } from '@angular/router';

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
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.animalId = this.activateRoute.snapshot.params['animalID'];
    this.animal$ = this.AnimaisService.findById(this.animalId)
  }
}
