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
    descripcion: "El estilo Geek está dirigido a los amantes de la cultura “friki”. En este estilo se pueden encontrar diseños que incluyen personajes de videojuegos, símbolos de películas, referencias a series de manga y elementos relacionados con la ciencia ficción. Los tatuajes Geek son una forma de mostrar aficiones e intereses particulares de forma creativa.", 
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
  },
  {
    id: "31",
  nombre:"Nordico",
  tipo: "Ambas", 
  origen: "",
  edad: 1000,
  imagen: "https://t2.uc.ltmcdn.com/es/posts/0/3/4/significado_de_los_tatuajes_vikingos_49430_600.jpg",
  descripcion: "El estilo nórdico en tatuajes se inspira en las culturas vikingas y germánicas, destacándose por sus diseños simbólicos y complejos. Utiliza motivos como runas, dioses nórdicos, y elementos de la naturaleza, principalmente en blanco y negro con líneas gruesas. Cada tatuaje tiene un significado profundo relacionado con la vida, la muerte y la conexión ancestral. Aunque sus raíces son antiguas, ha resurgido en la cultura contemporánea, atrayendo a quienes se interesan por la mitología vikinga.", 
  alt:"",
  ruta:"/"
  },

  {
    id: "32",
  nombre:"Celestial",
  tipo: "Parche", 
  origen: "",
  edad: 50,
  imagen: "https://i.pinimg.com/736x/5f/1f/fe/5f1ffe4d1384069cfc262abdb936b025.jpg",
  descripcion: "El estilo de tatuaje celestial se inspira en elementos del universo y la astrología, incluyendo astros como estrellas, lunas, planetas y constelaciones. Este estilo a menudo incorpora colores vibrantes y detalles etéreos, creando diseños que evocan una sensación de conexión con el cosmos, Los tatuajes celestiales pueden variar en complejidad, desde simples figuras de estrellas hasta elaboradas escenas cósmicas que incluyen galaxias y nebulosas.En términos de técnica, los artistas pueden emplear estilos como el realismo, el minimalismo o el watercolor, dependiendo de la visión del cliente.", 
  alt:"",
  ruta:""
  },

  {
    id: "33",
  nombre:"Botanico",
  tipo: "Parche", 
  origen: "",
  edad: 20,
  imagen: "https://i.pinimg.com/564x/d5/04/4d/d5044d9f883c3b5c8434aacb2181297b.jpg",
  descripcion: "El estilo de tatuaje botánico se centra en representar plantas, flores y otros elementos de la naturaleza con gran detalle y realismo. Este estilo busca capturar la belleza y la delicadeza de las formas naturales, a menudo utilizando colores vibrantes y sombras sutiles para dar vida a los diseños. Los tatuajes botánicos pueden incluir una amplia variedad de flora, desde flores individuales hasta jardines enteros, así como hojas, ramas y raíces.", 
  alt:"",
  ruta:""
  },
  {
    id: "34",
  nombre:"Porcelana china",
  tipo: "Parche", 
  origen: "",
  edad: 15,
  imagen: "https://i.pinimg.com/originals/aa/69/9c/aa699cf0b0f99e8b2bc9bcedc84c2dd4.jpg",
  descripcion: "El estilo de tatuaje de porcelana china se inspira en la estética de la cerámica china, conocida por sus delicados patrones en tonos azules y blancos. Este estilo imita la apariencia de la porcelana, incorporando motivos florales, paisajes y elementos ornamentales que reflejan la rica tradición del arte cerámico chino.", 
  alt:"",
  ruta:""
  },
  {
    id: "35",
  nombre:"Tiki polinesio",
  tipo: "Bodysuit", 
  origen: "",
  edad: 40,
  imagen: "https://cdntattoofilter.com/tattoo/312919/l.jpg",
  descripcion: "El estilo de tatuaje tiki polinesio se inspira en la rica cultura y tradiciones de las islas del Pacífico, especialmente en Polinesia. Este estilo se caracteriza por sus intrincados diseños que incorporan símbolos, figuras y patrones tradicionales, muchos de los cuales tienen significados espirituales y culturales profundos.Los tatuajes tiki a menudo representan deidades, ancestros y elementos de la naturaleza, y suelen utilizar líneas gruesas y formas geométricas. Estos tatuajes no solo son decorativos, sino que también se consideran un medio para contar historias y transmitir valores culturales.En términos estéticos, los tatuajes tiki polinesios suelen cubrir grandes áreas del cuerpo, como brazos, piernas y espaldas, convirtiéndolos en obras de arte corporal completas aunque tambien puede haber tatuaje de este estilo del tamaño de un parche", 
  alt:"",
  ruta:""
  },
  {
    id: "36",
  nombre:"Poligonal",
  tipo: "Parche", 
  origen: "",
  edad: 15,
  imagen: "https://i.pinimg.com/736x/23/fe/ab/23feab78caa0bfa2aa9e2ecb160d9d92.jpg",
  descripcion: "El estilo de tatuaje poligonal se caracteriza por el uso de formas geométricas y líneas angulares para crear diseños visualmente impactantes y contemporáneos. Este enfoque artístico transforma imágenes tradicionales en representaciones estilizadas, utilizando triángulos, cuadrados y otras formas para construir figuras abstractas o semi-realistas.", 
  alt:"",
  ruta:""
  },
  {
    id: "37",
  nombre:"Egipcio",
  tipo: "Ambas", 
  origen: "",
  edad: 20,
  imagen: "https://i.pinimg.com/originals/bb/b0/21/bbb0214416dcd844b0cee60c4f062496.jpg",
  descripcion: "El estilo de tatuaje egipcio se inspira en la rica y antigua cultura de Egipto, incorporando símbolos, figuras y motivos que reflejan la mitología, el arte y la historia de esta civilización milenaria. Este estilo a menudo incluye representaciones de dioses y diosas egipcios, jeroglíficos, escarabajos sagrados y elementos arquitectónicos como pirámides y esfinges.Los tatuajes egipcios son conocidos por su diseño detallado y su uso de líneas definidas, a menudo en una paleta de colores que incluye negro, dorado y tonos terracota. Estos tatuajes no solo son decorativos, sino que también pueden llevar significados profundos, como la protección, la vida después de la muerte y la conexión con lo divino.", 
  alt:"",
  ruta:""
  },
  {
    id: "38",
  nombre:"Alquimico",
  tipo: "Parche", 
  origen: "",
  edad: 15,
  imagen: "https://cdntattoofilter.com/tattoo/338549/l.jpg",
  descripcion: "El estilo de tatuaje alquímico se inspira en los principios y símbolos de la alquimia, una antigua práctica que combina filosofía, química y espiritualidad. Este estilo incorpora elementos como símbolos matemáticos, fórmulas, y figuras representativas de los cuatro elementos (tierra, aire, fuego y agua), así como la búsqueda de la transformación y la iluminación espiritual.",
  alt:"",
  ruta:""
  },
  {
    id: "39",
  nombre:"Esoterico",
  tipo: "Parche", 
  origen: "",
  edad: 30,
  imagen: "https://i.pinimg.com/originals/87/e8/8a/87e88a7ad7e7325529fdda0aa17f5134.jpg",
  descripcion: "El estilo de tatuaje esotérico se caracteriza por el uso de símbolos y elementos que representan conceptos ocultos, místicos y espirituales. Este estilo a menudo incluye motivos como mandalas, símbolos astrológicos, runas, patrones sagrados y representaciones de deidades o entidades espirituales. Los diseños esotéricos buscan transmitir significados profundos y a menudo están conectados con la búsqueda del conocimiento oculto y la comprensión de lo desconocido.", 
  alt:"",
  ruta:""
  },
  {
    id: "40",
  nombre:"Psychedelic",
  tipo: "Ambas", 
  origen: "",
  edad: 20,
  imagen: "https://newmedia.10masters.com/images/espalda-color-peyote.max-1000x1000.format-webp.webp",
  descripcion: "El estilo de tatuaje psicodélico se caracteriza por su uso vibrante de colores, formas abstractas y patrones intrincados que evocan una experiencia visual intensa. Inspirado en el arte psicodélico de los años 60 y 70, este estilo busca reflejar estados alterados de conciencia y experiencias sensoriales, a menudo asociadas con la música, la espiritualidad y la cultura de la contracultura.", 
  alt:"",
  ruta:""
  },
  {
    id: "41",
  nombre:"Mitologia griega",
  tipo: "Ambas", 
  origen: "",
  edad: 30,
  imagen: "https://i.pinimg.com/originals/49/5d/cc/495dccfbeeb0428e80f60ba5fccbe45c.jpg",
  descripcion: "El estilo de tatuaje de mitología griega se inspira en las ricas historias, dioses, diosas y mitos de la antigua Grecia. Este estilo incluye representaciones artísticas de figuras mitológicas como Zeus, Atenea, Poseidón, y Hades, así como criaturas míticas como quimeras, centauros y sirenas. Los tatuajes pueden presentar escenas épicas, simbolismo y elementos que reflejan los valores y creencias de la cultura griega antigua.", 
  alt:"",
  ruta:""
  },
  {
    id: "42",
  nombre:"Arte renancentista",
  tipo: "", 
  origen: "Ambas",
  edad: 30,
  imagen: "https://i.pinimg.com/originals/ba/0d/25/ba0d255f76fb4ebac4a3b75314037469.jpg",
  descripcion: "El estilo de tatuaje de arte renacentista se inspira en las obras maestras de la pintura y la escultura de la época renacentista, que floreció entre los siglos XIV y XVII en Europa. Este estilo se caracteriza por su enfoque en la belleza, la proporción y el realismo, capturando la esencia del arte de maestros como Leonardo da Vinci, Michelangelo y Raphael.", 
  alt:"",
  ruta:""
  },
  {
    id: "43",
  nombre:"Azteca",
  tipo: "Ambas", 
  origen: "",
  edad: 30,
  imagen: "https://i.pinimg.com/474x/22/7f/bf/227fbfb81a5324035cceca9871ad9f1e.jpg",
  descripcion: "El estilo de tatuaje azteca se inspira en la rica cultura, mitología y simbolismo de la civilización azteca, que floreció en Mesoamérica entre los siglos XIV y XVI. Este estilo incluye representaciones de dioses, guerreros, animales sagrados, y símbolos geométricos que eran significativos en la cosmovisión azteca.Los tatuajes aztecas suelen presentar líneas gruesas y patrones intrincados, con un enfoque en la simetría y el detalle. Elementos como el sol, la serpiente de cascabel, el jaguar, y el dios Quetzalcóatl son comunes, y cada uno de estos símbolos tiene un significado cultural y espiritual profundo. Este estilo no solo es visualmente impactante, sino que también permite a los portadores conectar con su herencia cultural y expresar su identidad.", 
  alt:"",
  ruta:""
  },
  {
    id: "44",
  nombre:"Ilusiones opticas",
  tipo: "Bodysuit", 
  origen: "",
  edad: 15,
  imagen: "https://i.pinimg.com/564x/30/9c/4b/309c4bc3a988cb021ebb229b41d50213.jpg",
  descripcion: "El estilo de tatuaje de ilusiones ópticas se caracteriza por el uso de diseños que juegan con la percepción visual, creando efectos tridimensionales y patrones que pueden parecer moverse o cambiar de forma a la vista. Este estilo utiliza principios de la geometría, el contraste y la perspectiva para desafiar la forma en que el cerebro interpreta las imágenes, lo que resulta en tatuajes que capturan la atención y provocan asombro.", 
  alt:"",
  ruta:"/"
  },
  {
    id: "45",
  nombre:"New school",
  tipo: "Parche", 
  origen: "",
  edad: 30,
  imagen: "https://avantgardetattoo.es/storage/2020/01/newschooltattoo-450x450.jpg",
  descripcion: "Los tatuajes acuarela imitan el efecto de las pinturas acuarelas en la piel, con colores vibrantes y difuminados. Este estilo se caracteriza por su aspecto artístico y libre, como si el tatuaje fuese una obra de arte en sí misma. Los diseños acuarela suelen representar paisajes, flores, animales y objetos cotidianos, y requieren de un tatuador con habilidades en el manejo de la técnica de la acuarela.", 
  alt:"",
  ruta:"/"
  },
  {
    id: "46",
    nombre: "Cyberpunk",
    tipo: "Parche",
    origen: "",
    edad: 30,
    imagen: "https://i.pinimg.com/236x/17/10/4c/17104c5ef28b0b11a671fe9e4008f8be.jpg",
    descripcion: "El estilo de tatuaje cyberpunk se inspira en la estética de la ciencia ficción y la cultura futurista, particularmente en el subgénero del cyberpunk que combina tecnología avanzada con un entorno urbano distópico. Este estilo se caracteriza por el uso de elementos visuales que evocan un mundo altamente tecnológico y digital, como circuitos, implantes cibernéticos, luces neón y paisajes urbanos futuristas.",
    alt: "",
    ruta: "/"
},
{
    id: "47",
    nombre: "Nikkei",
    tipo: "Bodysuit",
    origen: "",
    edad: 20,
    imagen: "https://i.pinimg.com/236x/d7/fc/77/d7fc77115e9b60832d24b27afd555096.jpg",
    descripcion: "El estilo de tatuaje nikkei es una forma de arte que combina la estética del tatuaje tradicional japonés con elementos culturales y artísticos de la cultura occidental, específicamente de América Latina y otros lugares donde las comunidades nikkei (descendientes de japoneses) se han establecido. Este estilo busca rendir homenaje a la herencia cultural japonesa mientras incorpora influencias modernas y locales.",
    alt: "",
    ruta: "/"
},
{
    id: "48",
    nombre: "Origami",
    tipo: "Parche",
    origen: "",
    edad: 15,
    imagen: "https://i.pinimg.com/originals/2a/99/ee/2a99eee43dc88db73447590406f01951.jpg",
    descripcion: "El estilo de tatuaje origami se inspira en el arte del plegado de papel japonés, conocido como origami. Este estilo se caracteriza por la representación de figuras y formas que evocan la estética del origami, utilizando líneas limpias, pliegues y patrones geométricos para crear imágenes que parecen tridimensionales y que juegan con la percepción visual.",
    alt: "",
    ruta: "/"
},
{
    id: "49",
    nombre: "Musical",
    tipo: "Parche",
    origen: "",
    edad: 20,
    imagen: "https://i.pinimg.com/736x/92/30/d5/9230d5ce62477621adcc8a2026473680.jpg",
    descripcion: "El estilo de tatuaje musical se inspira en la música y su cultura, reflejando la pasión y el amor por este arte a través de una variedad de símbolos, imágenes y elementos relacionados con la música. Este estilo puede incluir representaciones de instrumentos musicales, notas, pentagramas, micrófonos, auriculares, discos de vinilo, y letras de canciones, entre otros",
    alt: "",
    ruta: "/"
},
{
    id: "50",
    nombre: "Logo",
    tipo: "Parche",
    origen: "",
    edad: 20,
    imagen: "https://i.pinimg.com/236x/b1/2f/19/b12f19ad363165dabe65048dda261dc7.jpg",
    descripcion: "El estilo de tatuaje logo se caracteriza por la representación de logotipos icónicos de marcas, empresas, bandas musicales, películas, videojuegos y otros elementos de la cultura pop. Este estilo permite a los portadores expresar su lealtad, identidad y afinidad hacia una marca o una figura cultural específica, y a menudo se asocia con la nostalgia y la conexión emocional.",
    alt: "",
    ruta: "/"
},
{
    id: "51",
    nombre: "Deporte",
    tipo: "Parche",
    origen: "",
    edad: 30,
    imagen: "https://live.staticflickr.com/1551/24799993345_a293605e26_z.jpg",
    descripcion: "El estilo de tatuaje deporte se inspira en la pasión por diversas actividades deportivas y se caracteriza por la representación de símbolos, logotipos, equipos, atletas, o elementos relacionados con diferentes deportes. Este estilo abarca una amplia gama de disciplinas, desde deportes de equipo como el fútbol, baloncesto y béisbol, hasta deportes individuales como el boxeo, el surf y el ciclismo.",
    alt: "",
    ruta: "/"
},
{
    id: "52",
    nombre: "Medieval",
    tipo: "Ambos",
    origen: "",
    edad: 20,
    imagen: "https://i.pinimg.com/474x/8b/6a/b1/8b6ab18e85dbb427bebc4a68e65af8e2.jpg",
    descripcion: "El estilo Black and Grey es un tipo de tatuaje que utiliza únicamente tinta negra y grises, logrando un efecto de profundidad y sombreado a través de la dilución de la tinta. Este estilo es ideal para retratos, diseños realistas y escenas detalladas, ya que permite crear contrastes y gradientes suaves. Al centrarse en sombras y texturas, los tatuajes Black and Grey ofrecen un aspecto elegante y atemporal, y suelen ser menos propensos a desvanecerse en comparación con los tatuajes a color.",
    alt: "",
    ruta: "/"
},
{
    id: "53",
    nombre: "Mitologia Hindu",
    tipo: "Ambos",
    origen: "",
    edad: 30,
    imagen: "https://i.pinimg.com/736x/46/84/ba/4684ba83e85638fe56c443c519c36755.jpg",
    descripcion: "El estilo de tatuaje indu (o hindu) se basa en la rica iconografía y la espiritualidad de la cultura hindú. Este estilo se caracteriza por la representación de dioses, deidades, símbolos sagrados y elementos de la mitología hindú. Los tatuajes pueden incluir figuras como Ganesha, Shiva, Durga, o el Om, así como patrones intrincados que reflejan la estética del arte hindú.",
    alt: "",
    ruta: "/"
},

  ]
   }

}
