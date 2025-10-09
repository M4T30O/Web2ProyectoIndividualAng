import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  public infoTarjeta: Tarjeta[]


  constructor() {
    this.infoTarjeta = [
      {
        id: "12",
        img: "../../../assets/caballo.jpg",
        alt: "Foto de un caballo",
        nombreC: "",
        titulo: "Caballo",
        descripcion: "Animal domesticado hace mas de 500 años, el cual formo parte de la vida humana por años",
        anualPublicacion: 2025

      },
      {
        id: "15",
        img: "../../../assets/zorro.jpg",
        alt: "Foto de un zorro",
        nombreC: "Vulper Vulpes",
        titulo: "Zorro",
        descripcion: "Animal recientemente domesticado, se le relaciona en diferentes culturas y religiones como una señal de buen augurio",
        anualPublicacion: 2025 
      }
    ]
  }
}

