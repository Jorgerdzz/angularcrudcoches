import { Component, OnInit } from '@angular/core';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coches.component',
  imports: [RouterLink],
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css',
  providers: [ServiceCoches]
})
export class CochesComponent implements OnInit{

  public coches!: Array<Coche>;
  
  constructor(
    private _service:ServiceCoches,
  ){}

  ngOnInit(): void {
    this.getCoches();
  }

  getCoches(): void{
    this._service.getCoches().then(result=>{
      this.coches = result
    })
  }

  deleteCoche(idcoche: number): void{
    Swal.fire({
      icon: 'question',
      title: '¿Desea eliminar el coche definitivamente?',
      timer: 3000,
      timerProgressBar: true,
      showCancelButton: true,
    }).then((result)=>{
      if(result){
        this._service.deleteCoche(idcoche).then(()=>{
          Swal.fire({
            icon: 'success',
            title: 'Coche eliminado correctamente',
            timer: 3000,
            timerProgressBar: true
          }).then(()=>{
            this.getCoches();
          })
        })
      }
    })
    
  }


}
