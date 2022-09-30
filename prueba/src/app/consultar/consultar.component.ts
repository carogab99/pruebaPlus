import { Component, OnInit } from '@angular/core';

import { ApiService } from '../servicios/api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  id: any 
  listaPokemon: Array<any> = []

  constructor(
    private servicios: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
    this.servicios.getPokemon().subscribe((respuesta =>{
      this.listaPokemon = respuesta
    }))
  }

  redireccionar(id:any){
    let ruta = 'pokemon/'+id;
    this.router.navigate([ruta]);
  }

  deletePokemon(id:any){
    this.servicios.deletePokemonById(id).subscribe((respuesta => {
      this.getPokemon()
    }))
  }
}
