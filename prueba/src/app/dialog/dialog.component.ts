import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  id: any 
  name: any
  image: any
  attack: any
  defense: any

  constructor(
    private servicios: ApiService,
    private parametro: ActivatedRoute
  ) { 
    this.id = this.parametro.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getPokemonById()
  }

  getPokemonById(){
    this.servicios.getPokemonById(this.id).subscribe(respuesta =>{
      this.name = respuesta.name
      this.image = respuesta.image
      this.attack = respuesta.attack
      this.defense = respuesta.defense
    })
  }

  updatePokemon(){
    this.servicios.putPokemon(this.id, this.name, this.image, this.attack, this.defense).subscribe(respuesta =>{

    })
  }
}
