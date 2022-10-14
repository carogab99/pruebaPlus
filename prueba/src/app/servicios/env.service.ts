import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  API_URL  = 'https://bp-pokemons.herokuapp.com/?idAuthor=4'
  API_URL2 = 'https://bp-pokemons.herokuapp.com/'

  constructor() { }
}
