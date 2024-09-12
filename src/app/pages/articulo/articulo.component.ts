import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/interfaces/productos';
import { CommonModule } from '@angular/common';
import { ContadorCantidadComponent } from '../../core/components/contador-cantidad/contador-cantidad.component';
import { CartService } from '../../core/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule,ContadorCantidadComponent, FormsModule],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent implements OnInit{
  headerService = inject(HeaderService)
  productosService = inject(ProductosService)
  cartService = inject(CartService)

  producto?:Producto ;
  cantidad = signal(1);
  notas = "";

  ngOnInit(): void {
    this.headerService.titulo.set("Articulo");
  }

  constructor(private ac:ActivatedRoute, private router:Router){
    this.ac.params.subscribe(param => {
      const id = Number(param['id']); 
      if (id) {
          this.productosService.getById(id).then(producto => {
              if (producto) {
                  this.producto = producto;
                  this.headerService.titulo.set(producto.nombre);
              } else {
                  console.error('Producto no encontrado');
              }
          }).catch(error => {
              console.error('Error al obtener el producto:', error);
          });
      } else {
          console.error('ID no encontrado en los parámetros');
      }
  });
  }


  agregarAlCarrito(){
    if(!this.producto) return;
    this.cartService.agregarProducto(this.producto?.id,this.cantidad(),this.notas);
    this.router.navigate(["/carrito"]);
  }


}
