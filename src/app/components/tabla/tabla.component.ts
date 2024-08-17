import { Component, inject } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  
  servicio=inject(ProductoService)

  producto:any
  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{
      this.producto=p
    })
  }

  eliminar(id:any){
    
    this.servicio.deleteProducto(id).subscribe()
  }
  

}
