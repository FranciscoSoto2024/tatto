import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Tattoo } from 'src/app/models/tattoo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Tattoo[]

  constructor(){
    this.info = [
    {
      id: "",
    nombre:"Irezumi",
    estilo: "japones", 
    origen: "japon",
    edad: 5000,
    imagen: "https://allthingstattoo.ca/wp-content/uploads/2018/08/koji-ichimaru.jpg",
    descripcion: "Irezumi, o tatuaje japonés tradicional, se caracteriza por diseños intrincados que a menudo cubren grandes áreas del cuerpo, como la espalda, los brazos y las piernas. Este estilo presenta una rica iconografía, incluyendo dragones, carpas y flores de cerezo, cada uno con un profundo significado cultural y es considerado una forma de arte.", 
    alt:""
    },

    {
      id: "",
    nombre:"Old school",
    estilo: "Old school", 
    origen: "Estados unidos",
    edad: 100,
    imagen: "https://i.pinimg.com/originals/69/c9/7d/69c97d0639a48ecdf0fbe82208566b8a.jpg",
    descripcion: "Old school (en inglés: ‘vieja escuela’) en el arte del tatuaje, una referencia al estilo tradicional estadounidense, caracterizado por líneas negras gruesas, generalmente con una gama de colores plana y definido por un imaginario específico, como son los símbolos patrios de ese país, Los diseños son simples", 
    alt:""
    },

    {
      id: "",
    nombre:"Tribal",
    estilo: "Tribal", 
    origen: "Islas polinesias",
    edad: 2000,
    imagen: "https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/2021/01/20210106_yz8pH0CbQT3aOtd.jpeg?w=500",
    descripcion: "El tatuaje tribal es el estilo de tatuajes más antiguo, este arte del tatuaje está totalmente inspirado en la naturaleza y tiene un significado complejo por medio de patrones de tatuajes simples. Hoy en día, el término tatuaje tribal se refiere a un estilo de tatuaje específico caracterizado por áreas de negro sólido y formas abstractas curvas.", 
    alt:""
    },
    {
      id: "",
    nombre:"Geometrico",
    estilo: "Geometrico", 
    origen: "maori y polinesio",
    edad: 20,
    imagen: "https://i.pinimg.com/736x/ee/2c/f9/ee2cf96a8d5a9d67d4799ad7ee01cdf0.jpg",
    descripcion: "Los tatuajes geométricos destacan por su precisión y simetría, utilizando formas como triángulos y círculos para crear diseños visualmente impactantes. Este estilo combina la simplicidad de lo minimalista con la complejidad de patrones intrincados, a menudo incorporando significados simbólicos a este tipo de tatuajes", 
    alt:""
    },
    {
      id: "",
    nombre:"Blackout",
    estilo: "Blackout", 
    origen: "Estados unidos",
    edad: 20,
    imagen: "https://i.pinimg.com/originals/d4/e5/ec/d4e5ec7ca344521b67e358c798247f4c.jpg",
    descripcion: "El tatuaje blackout,se refiere a una tendencia contemporánea en el arte del tatuaje caracterizada por grandes áreas de tinta negra sólida que cubren la piel. Este estilo a menudo incluye formas audaces y amplias, y puede abarcar extremidades enteras o secciones del cuerpo.se centran en el contraste fuerte y el minimalismo, creando un impacto visual", 
    alt:""
    },
   
  ]
   }
}
