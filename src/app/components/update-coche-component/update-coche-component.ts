import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-coche-component',
  imports: [FormsModule],
  templateUrl: './update-coche-component.html',
  styleUrl: './update-coche-component.css',
  providers: [ServiceCoches]
})
export class UpdateCocheComponent implements OnInit{

  public coche!: Coche;

  constructor(
    private _service:ServiceCoches,
    private _activeRoute:ActivatedRoute,
    private _router:Router
  ){
    this.coche={
      idCoche:0,
      marca:"",
      modelo:"",
      conductor:"",
      imagen:""
    }
  }

  ngOnInit(): void {
    this.loadCoche();
  }

  loadCoche(): void{
    this._activeRoute.params.subscribe((params: Params)=>{
      this._service.getCoche(params['id']).subscribe(response=>{
        this.coche = response
      })
    })
  }

  updateCoche(): void{
    this._service.updateCoche(this.coche).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Coche modificado correctamente',
        timer: 3000,
        timerProgressBar: true,
      }).then(()=>{
        this._router.navigate(['/coches'])
      })
    })
  }

}
