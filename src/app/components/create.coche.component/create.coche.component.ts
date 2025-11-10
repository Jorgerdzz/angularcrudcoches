import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create.coche.component',
  imports: [FormsModule],
  templateUrl: './create.coche.component.html',
  styleUrl: './create.coche.component.css',
  providers: [ServiceCoches]
})
export class CreateCocheComponent {

  public coche: Coche;

  constructor(
    private _service: ServiceCoches,
    private _router: Router
  ){
    this.coche = {
      idCoche: 0,
      marca: "",
      modelo: "",
      conductor: "",
      imagen: "",
    }
  }

  createCoche(): void{
    this._service.createCoche(this.coche).then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Coche creado correctamente',
        timer: 3000,
        timerProgressBar: true
      }).then(()=>{
        this._router.navigate(['/coches']);
      })
    })
  }

}
