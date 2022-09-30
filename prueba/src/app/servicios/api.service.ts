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
}
