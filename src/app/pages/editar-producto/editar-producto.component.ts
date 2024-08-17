import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from 'express';
import { ProductoService } from '../../service/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {

  id:any;
  nombre:any;
  categoria: string=""
  precio:any;

  ruta= inject(ActivatedRoute)
  servicio=inject(ProductoService)

  ngOnInit(){
    this.ruta.params.subscribe(r=>{
      let id =r['idProducto']
      this.servicio.getProductoID(id).subscribe(p=>{
        this.id=p.id
        this.nombre=p.nombre
        this.categoria=p.categoria
        this.precio=p.precio
      })
    })
  }

  editar(data:NgForm){
    this.servicio.putproducto(data.value).subscribe()
    alert("Elemento editado")

  }

}
