import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  imports: [
    CommonModule,
    PokemonFormComponent
  ],
  template: `
    <h2>Ajouter un pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styleUrl: './add-pokemon.component.css'
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
