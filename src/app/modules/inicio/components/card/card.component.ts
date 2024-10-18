import { Component, Input } from '@angular/core';
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
      id: "1",
    nombre:"Irezumi",
    estilo: "japones", 
    origen: "",
    edad: 5000,
    imagen: "https://allthingstattoo.ca/wp-content/uploads/2018/08/koji-ichimaru.jpg",
    descripcion: "Irezumi, o tatuaje japonés tradicional, se caracteriza por diseños intrincados que a menudo cubren grandes áreas del cuerpo, como la espalda, los brazos y las piernas. Este estilo presenta una rica iconografía, incluyendo dragones, carpas y flores de cerezo, cada uno con un profundo significado cultural y es considerado una forma de arte.", 
    alt:"",
    ruta:"/producto"
    },

    {
      id: "2",
    nombre:"Tradicional",
    estilo: "Tradicional", 
    origen: "",
    edad: 100,
    imagen: "https://i.pinimg.com/originals/69/c9/7d/69c97d0639a48ecdf0fbe82208566b8a.jpg",
    descripcion: "Tradicional tambien conocido como old school en el arte del tatuaje, una referencia al estilo tradicional estadounidense, caracterizado por líneas negras gruesas, generalmente con una gama de colores plana y definido por un imaginario específico, como son los símbolos patrios de ese país, Los diseños son simples", 
    alt:"",
    ruta:""
    },

    {
      id: "3",
    nombre:"Tribal",
    estilo: "Tribal", 
    origen: "",
    edad: 2000,
    imagen: "https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/2021/01/20210106_yz8pH0CbQT3aOtd.jpeg?w=500",
    descripcion: "El tatuaje tribal es el estilo de tatuajes más antiguo, este arte del tatuaje está totalmente inspirado en la naturaleza y tiene un significado complejo por medio de patrones de tatuajes simples. Hoy en día, el término tatuaje tribal se refiere a un estilo de tatuaje específico caracterizado por áreas de negro sólido y formas abstractas curvas.", 
    alt:"",
    ruta:""
    },
    {
      id: "4",
    nombre:"Geometrico",
    estilo: "Geometrico", 
    origen: "",
    edad: 20,
    imagen: "https://i.pinimg.com/736x/ee/2c/f9/ee2cf96a8d5a9d67d4799ad7ee01cdf0.jpg",
    descripcion: "Los tatuajes geométricos destacan por su precisión y simetría, utilizando formas como triángulos y círculos para crear diseños visualmente impactantes. Este estilo combina la simplicidad de lo minimalista con la complejidad de patrones intrincados, a menudo incorporando significados simbólicos a este tipo de tatuajes", 
    alt:"",
    ruta:""
    },
    {
      id: "5",
    nombre:"Blackout",
    estilo: "Blackout", 
    origen: "",
    edad: 20,
    imagen: "https://i.pinimg.com/originals/d4/e5/ec/d4e5ec7ca344521b67e358c798247f4c.jpg",
    descripcion: "El tatuaje blackout,se refiere a una tendencia contemporánea en el arte del tatuaje caracterizada por grandes áreas de tinta negra sólida que cubren la piel. Este estilo a menudo incluye formas audaces y amplias, y puede abarcar extremidades enteras o secciones del cuerpo.se centran en el contraste fuerte y el minimalismo creando un impacto visual, y tambien se usa para tapar tattos antiguos", 
    alt:"",
    ruta:""
    },
    {
      id: "6",
    nombre:"Blackwork",
    estilo: "Blackwork", 
    origen: "",
    edad: 40,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMCiBou-J_VPOvbcuwhrSkZoSjn6Pt_m-kzg&s",
    descripcion: "El estilo de tatuaje blackwork se caracteriza por el uso de tinta negra para crear diseños audaces y llamativos. Este enfoque puede incluir patrones geométricos, ilustraciones detalladas, sombras y figuras abstractas,A menudo, el blackwork juega con el contraste, utilizando áreas de negro sólido para resaltar otras formas o elementos,on apreciados por su estética minimalista", 
    alt:"",
    ruta:""
    },
    {
      id: "7",
    nombre:"Old school blackwork",
    estilo: "Old school blackwork", 
    origen: "",
    edad: 50,
    imagen: "https://i.pinimg.com/originals/2b/6d/88/2b6d88973000128a4b7a5b2919286361.jpg",
    descripcion: "En el old school blackwork, se eliminan los colores brillantes que suelen acompañar al estilo old school y se sustituye por áreas de negro sólido. Este enfoque realza la estética clásica pero con un toque moderno y monocromático, manteniendo la simplicidad del diseño mientras se juegan con los contrastes de luz y sombra. Al igual que en el blackwork pero un poco menos minimalista.", 
    alt:"",
    ruta:""
    },
    {
      id: "8",
    nombre:"Realismo",
    estilo: "", 
    origen: "",
    edad: 30,
    imagen: "https://th.bing.com/th/id/OIP.WAEYygipIGyN283yHsWjFwHaHa?rs=1&pid=ImgDetMain",
    descripcion: "El objetivo del realismo en un tatuaje es crear dibujos que se asemejen al máximo a imágenes fotográficas logrando una ilusión óptica que haga que el diseño parezca tridimensional y que cobre vida. Se emplean técnicas avanzadas de mezcla de colores y sombreados para dar profundidad y vida a las imágenes y Este estilo está profundamente influenciado por la pintura y la fotografía,",
    alt:"",
    ruta:""
    },
    {
      id: "9",
    nombre:"Puntillismo",
    estilo: "", 
    origen: "",
    edad: 30,
    imagen: "https://th.bing.com/th/id/OIP.xphqLNiqBG5LhTgWUWqZuQHaG0?rs=1&pid=ImgDetMain",
    descripcion: "El estilo de puntillismo, también conocido como dotwork, es una técnica de tatuaje que utiliza pequeños puntos para crear imágenes y patrones.Indiferentemente de a través de qué técnica lo haga, todo quien tatúe dotwork debe tener paciencia y cuidado a la hora de hacerlo ya que no es sencillo de hacer y requiere tanta precisión como noción de composición.", 
    alt:"",
    ruta:""
    },
    {
      id: "10",
    nombre:"Ignorant style",
    estilo: "", 
    origen: "",
    edad: 25,
    imagen: "https://i.pinimg.com/736x/3b/bd/97/3bbd978938a93a5fcb96648a414c96e0.jpg",
    descripcion: "El ignorant style (el peor estilo para mi) es un enfoque de tatuaje que se caracteriza por su estética deliberadamente sencilla, a menudo con un toque de humor o ironía,Utiliza líneas gruesas y formas básicas, a menudo con un acabado rudimentario. Los diseños pueden parecer hechos a mano o sin mucha precisión técnica ya que La falta de detalles elaborados.", 
    alt:"",
    ruta:""
    },
    {
      id: "11",
    nombre:"Trash polka",
    estilo: "", 
    origen: "",
    edad: 20,
    imagen: "https://avantgardetattoo.es/wp-content/uploads/2022/06/WIZINK-portfolio_003-scaled.jpg",
    descripcion: "El estilo Trash Polka tiene sus orígenes en Alemania, en un centro llamado Buena Vista Tattoo y fue creado por Simone Plaff y Volko Mershcky, quienes lo consideran una fusión de “realismo y basura”. Es un estilo que combina lo misterioso con lo dramático,El Trash Polka combina tintas en color negro y rojo para crear los efectos de misterio y profundidad en las imágenes.", 
    alt:"",
    ruta:""
    },
    {
      id: "12",
    nombre:"Cyber-sigilism",
    estilo: "", 
    origen: "",
    edad: 10,
    imagen: "https://i.pinimg.com/236x/78/29/44/782944b627627af1f288cb2eb1f17597.jpg",
    descripcion: "El Cyber Sigilism es un estilo de tatuaje futurista y vanguardista que fusiona elementos digitales, geométricos y esotéricos. Es una mezcla de ciberpunk y simbolismo místico, con un enfoque en formas abstractas, patrones complejos y líneas minimalistas, que evocan tecnología,el ciberespacio y los rituales simbólicos,suelen ser en tinta negra pero también se usan tonos vibrantes o neones", 
    alt:"",
    ruta:""
    },
    {
      id: "13",
    nombre:"Neo tradicional",
    estilo: "Neo tradicional", 
    origen: "",
    edad: 25,
    imagen: "https://zbcscrwjqlygjzrqvdcu.supabase.co/storage/v1/object/public/tattoox/faef744f-3a6c-4118-9930-a7915fd84b4c/c2e69011-368e-4129-b1b3-4c2fe8577527.image",
    descripcion: "El tatuaje estilo neo tradicional es una evolución moderna del tatuaje tradicional, que combina elementos clásicos con detalles más elaborados y técnicas avanzadas. Se caracteriza por líneas audaces y bien definidas, similares a las del estilo tradicional, pero con mayor fluidez y dinamismo,Utiliza colores vibrantes incorporando degradados y sombras que aportan profundidad y volumen y le da un aspecto tridimensional.", 
    alt:"",
    ruta:""
    },
    {
      id: "10",
    nombre:"Ignorant style",
    estilo: "", 
    origen: "",
    edad: 25,
    imagen: "https://i.pinimg.com/736x/3b/bd/97/3bbd978938a93a5fcb96648a414c96e0.jpg",
    descripcion: "El ignorant style (el peor estilo para mi) es un enfoque de tatuaje que se caracteriza por su estética deliberadamente sencilla, a menudo con un toque de humor o ironía,Utiliza líneas gruesas y formas básicas, a menudo con un acabado rudimentario. Los diseños pueden parecer hechos a mano o sin mucha precisión técnica ya que La falta de detalles elaborados.", 
    alt:"",
    ruta:"/"
    },
    {
      id: "10",
    nombre:"Ignorant style",
    estilo: "", 
    origen: "",
    edad: 25,
    imagen: "https://i.pinimg.com/736x/3b/bd/97/3bbd978938a93a5fcb96648a414c96e0.jpg",
    descripcion: "El ignorant style (el peor estilo para mi) es un enfoque de tatuaje que se caracteriza por su estética deliberadamente sencilla, a menudo con un toque de humor o ironía,Utiliza líneas gruesas y formas básicas, a menudo con un acabado rudimentario. Los diseños pueden parecer hechos a mano o sin mucha precisión técnica ya que La falta de detalles elaborados.", 
    alt:"",
    ruta:"/"
    },
    
  ]
   }

}
