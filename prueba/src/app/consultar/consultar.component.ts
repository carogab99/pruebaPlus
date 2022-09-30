import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service'

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  id: any 
  listaPokemon: Array<any> = []

  constructor(
    private servicios: ApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon(){
    this.servicios.getPokemon().subscribe((respuesta =>{
      this.listaPokemon = respuesta
      console.log(this.listaPokemon);
      
    }))
  }

}
