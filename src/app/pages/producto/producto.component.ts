import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, FormsModule, TablaComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  
  servicio=inject(ProductoService)
  id:any;
  nombre:any;
  categoria: string=""
  precio:any;

  guardar(data:any){
    console.log(data.value);
    this.servicio.postProducto(data.value).subscribe()
    window.location.href="productos"
  }

}
