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
    tipo: "Bodysuit", 
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
    tipo: "Parche", 
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
    tipo: "Ambas", 
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
    tipo: "Ambas", 
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
    tipo: "Bodysuit", 
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
    tipo: "Bodysuit", 
    origen: "",
    edad: 40,
    imagen: "https://preview.redd.it/mrj02d9m3sj51.jpg?width=1080&crop=smart&auto=webp&s=2abb2409ead5ea37423cb751a8f06d581f953672",
    descripcion: "El estilo de tatuaje blackwork se caracteriza por el uso de tinta negra para crear diseños audaces y llamativos. Este enfoque puede incluir patrones geométricos, ilustraciones detalladas, sombras y figuras abstractas,A menudo, el blackwork juega con el contraste, utilizando áreas de negro sólido para resaltar otras formas o elementos,on apreciados por su estética minimalista", 
    alt:"",
    ruta:""
    },
    {
      id: "7",
    nombre:"Tradicional blackwork",
    tipo: "Parche", 
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
    tipo: "Ambas", 
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
    tipo: "Ambas", 
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
    tipo: "Parche", 
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
    tipo: "Parche", 
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
    tipo: "", 
    origen: "Parche",
    edad: 10,
    imagen: "https://i.pinimg.com/236x/78/29/44/782944b627627af1f288cb2eb1f17597.jpg",
    descripcion: "El Cyber Sigilism es un estilo de tatuaje futurista y vanguardista que fusiona elementos digitales, geométricos y esotéricos. Es una mezcla de ciberpunk y simbolismo místico, con un enfoque en formas abstractas, patrones complejos y líneas minimalistas, que evocan tecnología,el ciberespacio y los rituales simbólicos,suelen ser en tinta negra pero también se usan tonos vibrantes o neones", 
    alt:"",
    ruta:""
    },
    {
      id: "13",
    nombre:"Neo tradicional",
    tipo: "Parche", 
    origen: "",
    edad: 25,
    imagen: "https://zbcscrwjqlygjzrqvdcu.supabase.co/storage/v1/object/public/tattoox/faef744f-3a6c-4118-9930-a7915fd84b4c/c2e69011-368e-4129-b1b3-4c2fe8577527.image",
    descripcion: "El tatuaje estilo neo tradicional es una evolución moderna del tatuaje tradicional, que combina elementos clásicos con detalles más elaborados y técnicas avanzadas. Se caracteriza por líneas audaces y bien definidas, similares a las del estilo tradicional, pero con mayor fluidez y dinamismo,Utiliza colores vibrantes incorporando degradados y sombras que aportan profundidad y volumen aspecto tridimensional.", 
    alt:"",
    ruta:""
    },
    {
      id: "14",
    nombre:"Estilo Geek",
    tipo: "Parche", 
    origen: "",
    edad: 30,
    imagen: "https://i.pinimg.com/236x/32/a3/d2/32a3d21207d7cc0199b7228b4d9679b1.jpg",
    descripcion: "El estilo Geek está dirigido a los amantes de la cultura “friki”. En este estilo se pueden encontrar diseños que incluyen personajes de videojuegos, símbolos de películas, referencias a series de manga y elementos relacionados con la ciencia ficción. Los tatuajes Geek son una forma de mostrar aficiones e intereses particulares de forma creativa..", 
    alt:"",
    ruta:"/"
    },
    {
      id: "15",
    nombre:"Estilo acuarela",
    tipo: "Parche", 
    origen: "",
    edad: 20,
    imagen: "https://wantxneed-gear.com/wp-content/uploads/2023/07/estilos-de-tatuajes-acuarela-1024x1024.webp",
    descripcion: "Los tatuajes acuarela imitan el efecto de las pinturas acuarelas en la piel, con colores vibrantes y difuminados. Este estilo se caracteriza por su aspecto artístico y libre, como si el tatuaje fuese una obra de arte en sí misma. Los diseños acuarela suelen representar paisajes, flores, animales y objetos cotidianos, y requieren de un tatuador con habilidades en el manejo de la técnica de la acuarela.", 
    alt:"",
    ruta:"/"
    },
    {
      id: "16",
      nombre: "Minimalista",
      tipo: "Parche",
      origen: "",
      edad: 10,
      imagen: "https://circetattoo.com/wp-content/uploads/2023/12/loto-tattoo-edited.jpg-1-1-1-1-2-1-1.png",
      descripcion: "El tatuaje minimalista se caracteriza por su simplicidad y el uso de líneas finas para crear imágenes claras y definidas. A menudo, se enfocan en símbolos pequeños o en siluetas de objetos y figuras. Este estilo es popular entre quienes buscan tatuajes discretos, con significados personales o expresivos sin necesidad de elementos visuales complejos. Requiere precisión, ya que la simplicidad destaca cada detalle.",
      alt: "",
      ruta: "/"
  },
  {
      id: "17",
      nombre: "Surrealista",
      tipo: "Ambas",
      origen: "",
      edad: 50,
      imagen: "https://www.steelofdoom.com/wp-content/uploads/2024/02/tatuajes-surrealistas-barcelona-steel-of-doom-img_8360.webp",
      descripcion: "El tatuaje surrealista es una extensión del arte surrealista, representando imágenes de ensueño, oníricas o fusionando elementos de formas inesperadas. Este estilo incluye una mezcla de realismo y abstracción, lo cual lo hace visualmente intrigante y permite al artista experimentar con combinaciones inusuales. Es perfecto para quienes buscan tatuajes que representan ideas complejas o visiones artísticas poco convencionales.",
      alt: "",
      ruta: "/"
  },
  {
      id: "18",
      nombre: "Biomecánico",
      tipo: "Bodysuit",
      origen: "",
      edad: 30,
      imagen: "https://www.curso-tatuaje-4its.com/wp-content/uploads/2022/04/Interview-with-Heng-Yue-tattoo-artist-China-Underground.png",
      descripcion: "El estilo biomecánico imita piezas de maquinaria fusionadas con el cuerpo humano, a menudo incorporando engranajes, cables y componentes mecánicos que se ven integrados en los músculos o huesos. Inspirado en la ciencia ficción y la anatomía, este estilo ofrece un efecto tridimensional impresionante que parece revelar una estructura robótica debajo de la piel.",
      alt: "",
      ruta: "/"
  },
  {
      id: "19",
      nombre: "Chicano",
      tipo: "Ambas",
      origen: "",
      edad: 80,
      imagen: "https://www.curso-tatuaje-4its.com/wp-content/uploads/2022/04/37300c4ed090f00edfc0750b34e22c50.jpg",
      descripcion: "El estilo Chicano es una forma de arte del tatuaje que surgió de la cultura Chicana en los Estados Unidos. Se caracteriza por representaciones en tinta negra, con imágenes simbólicas que incluyen vírgenes, calaveras, rostros de mujeres, y temas religiosos o de barrio. Es un estilo cargado de significados y representaciones culturales, y destaca por su sombreado suave y detalle en blanco y negro.",
      alt: "",
      ruta: "/"
  },
  {
      id: "20",
      nombre: "Ornamental",
      tipo: "Ambas",
      origen: "",
      edad: 15,
      imagen: "https://newmedia.10masters.com/images/ornamental-tatuaje-portada.original.png",
      descripcion: "El tatuaje ornamental es un estilo decorativo inspirado en patrones detallados y simétricos, similar al arte de la joyería. A menudo abarca mandalas, líneas fluidas, y detalles intrincados que se asemejan a diseños de encaje o motivos florales. Es una forma elegante y artística de embellecer el cuerpo, ideal para aquellos que aprecian el arte detallado y la simetría, no se le debe confundir con el estilo geometrico porque ambos estilos pueden contener patrones simétricos y detallados, los tatuajes geométricos se centran en la precisión de las formas matemáticas, mientras que los ornamentales buscan una apariencia decorativa y fluida..",
      alt: "",
      ruta: "/"
  },
  {
      id: "21",
      nombre: "Fineline",
      tipo: "Parche",
      origen: "",
      edad: 10,
      imagen: "https://nobleart.com/storage/tattoo-fineline-brazo-flores-1658397639vobkK.jpg",
      descripcion: "El estilo Fineline es un tipo de tatuaje caracterizado por el uso de líneas extremadamente finas y detalladas para crear imágenes delicadas y elegantes. Este estilo permite una precisión asombrosa en detalles y sombras sutiles, y es ideal para tatuajes pequeños o retratos que requieren alta definición en áreas mínimas. Es especialmente popular para quienes desean algo discreto y de alta calidad estética.",
      alt: "",
      ruta: "/"
  },
  {
      id: "22",
      nombre: "Black and Grey",
      tipo: "Ambas",
      origen: "",
      edad: 50,
      imagen: "https://cdntattoofilter.com/tattoo/27500/l.jpg",
      descripcion: "El estilo Black and Grey es un tipo de tatuaje que utiliza únicamente tinta negra y grises, logrando un efecto de profundidad y sombreado a través de la dilución de la tinta. Este estilo es ideal para retratos, diseños realistas y escenas detalladas, ya que permite crear contrastes y gradientes suaves. Al centrarse en sombras y texturas, los tatuajes Black and Grey ofrecen un aspecto elegante y atemporal, y suelen ser menos propensos a desvanecerse en comparación con los tatuajes a color.",
      alt: "",
      ruta: "/"
  },
  {
      id: "23",
      nombre: "Sketch",
      tipo: "Parche",
      origen: "",
      edad: 5,
      imagen: "https://logiabarcelona.com/wp-content/uploads/2018/06/tatuajes-pecho-fantasia-logia-barcelona-janiak.jpg",
      descripcion: "El estilo Sketch imita el aspecto de un boceto a lápiz, con líneas entrecortadas y sin definición completa. Se ve como un dibujo en proceso, capturando una estética artística, libre y sin los acabados nítidos de otros estilos. Este estilo resalta lo crudo y lo improvisado del dibujo, lo cual lo hace especialmente atractivo para los amantes del arte.",
      alt: "",
      ruta: "/"
  },
  {
      id: "24",
      nombre: "Dark art",
      tipo: "Ambas",
      origen: "",
      edad: 30,
      imagen: "https://i.pinimg.com/736x/78/a8/e2/78a8e20f0d3658defa19fe408cf63f7b.jpg",
      descripcion: "El tatuaje estilo Dark Art se caracteriza por su estética oscura, inquietante y a menudo macabra. Este estilo incorpora elementos como calaveras, seres fantasmales, criaturas sobrenaturales, y temas de muerte o misticismo. Usualmente se realiza en tonos de negro y gris, con un sombreado profundo que resalta el dramatismo y crea una atmósfera sombría. Inspirado en el arte gótico y el horror, el Dark Art es ideal para quienes buscan diseños intensos que exploran lo siniestro y lo misterioso, ofreciendo un estilo de expresión único y provocador.",
      alt: "",
      ruta: "/"
  },
  {
      id: "25",
      nombre: "Neo Japonés",
      tipo: "Ambas",
      origen: "",
      edad: 10,
      imagen: "https://lapirateriatattoo.com/wp-content/uploads/2022/11/5.webp",
      descripcion: "Inspirado en el tradicional japonés Irezumi, el Neo Japonés moderniza estos elementos mediante líneas más limpias y colores más brillantes. Sigue incluyendo elementos típicos como dragones, tigres, demonios y flores de cerezo, pero con una estética más contemporánea y en algunos casos, fusionado con otros estilos.",
      alt: "",
      ruta: "/"
  },
  {
      id: "26",
      nombre: "Cubismo",
      tipo: "Parche",
      origen: "",
      edad: 20,
      imagen: "https://i.pinimg.com/736x/3e/7b/33/3e7b3323abc64080e80ceb712bddf1c8.jpg",
      descripcion: "El estilo cubista se inspira en el arte cubista de Picasso y Braque, representando imágenes descompuestas en formas geométricas y perspectivas múltiples. Este estilo ofrece una visión única y abstracta, permitiendo una interpretación visual que va más allá de lo convencional. Es ideal para quienes buscan un tatuaje artístico y con un toque de modernidad.",
      alt: "",
      ruta: "/"
  },
  {
      id: "27",
      nombre: "Microrealismo",
      tipo: "Parche",
      origen: "",
      edad: 15,
      imagen: "https://nobleart.com/storage/tattoo-microrealismo-brazo-tigre-1658398235HBagx.png",
      descripcion: "El microrealismo es un estilo de tatuaje que busca reproducir imágenes realistas en un formato extremadamente pequeño, con un nivel de detalle sorprendente. Usando agujas finas y técnicas precisas, los artistas logran retratos, paisajes y objetos con un realismo impresionante, a pesar del tamaño reducido. Este estilo se destaca por su delicadeza y exactitud, ideal para quienes buscan tatuajes sutiles y detallados que capturan escenas o figuras complejas en un espacio limitado.",
      alt: "",
      ruta: "/"
  },
  {
      id: "28",
      nombre: "Lettering",
      tipo: "Parche",
      origen: "",
      edad: 15,
      imagen: "https://newmedia.10masters.com/images/lettering-tattoo.max-1000x1000.format-webp.webp",
      descripcion:"El lettering es un estilo de tatuaje centrado en el diseño de letras, palabras o frases. Los artistas personalizan las tipografías y trazos, creando estilos únicos que pueden variar desde cursivas elegantes hasta letras góticas o modernas. Este tipo de tatuaje es popular para expresar mensajes significativos, nombres, citas o mantras personales, y permite una gran creatividad en la composición, adaptándose a diferentes tamaños y estilos de escritura.",
      alt:"",
      ruta:"/"
  },
  {
    id: "29",
    nombre: "Dark lettering",
    tipo: "Ambas",
    origen: "",
    edad: 10,
    imagen: "https://i.pinimg.com/originals/98/82/ef/9882ef808e50bf87249ec7d357a3f55d.jpg",
    descripcion:"El dark lettering es un estilo de tatuaje que se centra en la tipografía con un enfoque oscuro y dramático. Este estilo utiliza fuentes con trazos gruesos, sombras profundas y elementos decorativos que evocan una sensación de misterio o inquietud. A menudo, se combina con motivos góticos, como calaveras, cruces o elementos naturales, para complementar el diseño. El dark lettering es popular entre aquellos que buscan expresar frases significativas, citas o nombres de manera impactante y visualmente atractiva, reflejando temas de oscuridad, rebeldía o introspección.",
    alt:"",
    ruta:"/"
  },
  {
    id: "30",
    nombre: "Graffiti",
    tipo: "Parche",
    origen: "",
    edad: 50,
    imagen: "https://i2.wp.com/outsons.com/wp-content/uploads/2021/10/Graffiti-Tattoos.jpg",
    descripcion:"El tatuaje estilo graffiti se inspira en el arte urbano y la cultura del grafismo callejero. Este estilo se caracteriza por su uso audaz de colores vibrantes, líneas dinámicas y un enfoque libre y expresivo. Los diseños suelen incluir letras estilizadas, personajes caricaturescos, y elementos abstractos, reflejando la energía y creatividad de la cultura del graffiti. Los tatuajes en este estilo a menudo buscan transmitir un mensaje o una emoción, capturando la esencia del arte callejero en la piel de manera llamativa y única. Es popular entre quienes desean llevar un pedazo de la cultura urbana en su cuerpo.",
    alt:"",
    ruta:"/"
}
    
  ]
   }

}
