import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { EnvService } from '../servicios/env.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private apiRest: HttpClient, 
    private envService: EnvService
  ) { }

  getPokemon(): Observable <any>{
    return this.apiRest.get(this.envService.API_URL)
  }

  getPokemonById(id: any): Observable <any>{
    return this.apiRest.get(this.envService.API_URL2+`${id}`)
  }

  deletePokemonById(id: any): Observable <any>{
    return this.apiRest.delete(this.envService.API_URL2+`${id}`)
  }

  putPokemon(id:any, name: any, image: any, attack: any, defense: any):Observable <any>{
    return this.apiRest.put(this.envService.API_URL2+`${id}`, {name,image, attack, defense})
  }
}
