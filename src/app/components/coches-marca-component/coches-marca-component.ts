import { Component, OnInit } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../../models/coche';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coches-marca-component',
  imports: [FormsModule],
  templateUrl: './coches-marca-component.html',
  styleUrl: './coches-marca-component.css',
  providers: [ServiceCoches]
})
export class CochesMarcaComponent implements OnInit{

  public cochesMarca!: Array<Coche>;

  constructor(
    private _service: ServiceCoches,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.loadCochesPorMarca();
  }

  loadCochesPorMarca(): void{
    this._activeRoute.params.subscribe((params: Params) => {
      let marca = params['marca'];
      marca = marca.toUpperCase();
      this._service.getCoches().then(response=>{
        let coches = response;
        let aux = [];
        for(let coche of coches){
          if(coche.marca.trim().toUpperCase() === marca){
            aux.push(coche);
          }
        }
        this.cochesMarca = aux;
      })
    });
  }

}
