import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: 'app-edit-pokemon',
  imports: [
    CommonModule,
    PokemonFormComponent
  ],
  template: `
    <h2>Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon">
        <img [src]="pokemon.picture" alt="">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styleUrl: './edit-pokemon.component.css'
})
export class EditPokemonComponent implements OnInit {
  
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }

}
