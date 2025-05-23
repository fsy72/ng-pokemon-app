import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../pokemon.service';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    SearchPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

  goToAddPokemon() {
    this.router.navigate(['pokemon/add']);
  }

}
