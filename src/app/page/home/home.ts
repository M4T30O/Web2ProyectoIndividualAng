import { Component } from '@angular/core';
import { Animales } from '../../models/animales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {

  public infoAnimales: Animales[]

  constructor() {
    this.infoAnimales = [
      {
        id: 21,
        img: "../../../assets/caballo.jpg",
        edad: 7,
        especie: "Caballo",
        genero: "Masculino",
        habitat: "áreas abiertas con pastos y praderas"
      },

      {
        id: 22,
        img: "../../../assets/Lobo.jpg",
        edad: 12,
        especie: "lobo",
        genero: "Femenino",
        habitat: "Abarcan gran cantidad de ecosistemas, van desde tundras y lugares helados, a bosques y lugares desiertos."
      },
      {
        id: 23,
        img: "../../../assets/zorro.jpg",
        edad: 5,
        especie: "Zorro",
        genero: "Masculino",
        habitat: "Al igual que los lobos tienen ecosistemas variados, estos podrian ser: bosques, praderas, estepas, zonas montañosas y desiertos"
      },
      {
        id: 24,
        img : "../../../assets/Leopardo.jpg",
        edad: 9,
        especie: "Leopardo",
        genero: "Femenino",
        habitat: "De igual manera que animales presentados anteriormente, los leopardos tienen un habitat variado, puede ser: la sabana, praderas y bosques hasta zonas desérticas, montañosas y selvas tropicales"
      }
    ]

  }

  AnimalSeleccionado: any = null
  Comprar(animales: any) {
    this.AnimalSeleccionado = animales
  }

}

