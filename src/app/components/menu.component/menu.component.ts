import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  public marca: string;

  constructor(
    private _router:Router
  ){
    this.marca = ""
  }

  goToCochesMarca(): void{
    this._router.navigate(['/coches/' + this.marca])
  }

}
