const libros = [
  {
    uuid: "a82be10d-041a-3314-9780-9880df0e43d2",
    titulo: "El Principito",
    isbn: "9791167030887",
    autor: "Antoine de Saint-Exupéry",
    disponible: false,
    precio: 25.5,
    portada: "images/el-principito.jpg",
    resumen:
      "Un piloto perdido en el desierto encuentra a un pequeño príncipe de otro planeta que le enseña valiosas lecciones sobre la vida y la humanidad.",
    descuento: 15,
    precioFinal: 21.68,
    resumenLargo: `El Principito llega a la Tierra tras abandonar su asteroide y su amada rosa, en busca de respuestas y amistades.
A través de sus encuentros con el zorro, la serpiente y el aviador perdido, descubre la importancia del afecto, la lealtad y la imaginación.
El relato mezcla la sencillez de un cuento y la profundidad de una fábula filosófica, invitándonos a redescubrir la esencia de la infancia.
Cada planeta que visita aporta una reflexión sobre las vanidades y obsesiones de los adultos, desde el rey solitario hasta el hombre de negocios.
Finalmente, la despedida del Principito nos recuerda que lo invisible a los ojos es lo esencial, y que amar implica también aprender a soltar.`,
  },
  {
    uuid: "e38d28f9-765b-3208-b2f6-f9a4af09b540",
    titulo: "Cien Años de Soledad",
    isbn: "9784485014660",
    autor: "Gabriel García Márquez",
    disponible: true,
    precio: 15.0,
    portada: "images/cien-anos-de-soledad.jpg",
    resumen:
      "La historia épica de la familia Buendía en el pueblo ficticio de Macondo, explorando temas de soledad, amor y destino.",
    descuento: 10,
    precioFinal: 13.5,
    resumenLargo: `La novela narra la fundación de Macondo por José Arcadio Buendía y su esposa Úrsula, trazando el destino de siete generaciones de los Buendía.
García Márquez entrelaza lo mágico con lo cotidiano: los personajes vuelan, nacen con cola de cerdo y viven ciclos de pasión, locura y repetición histórica.
El realismo mágico se expresa en las mariposas amarillas de Mauricio Babilonia y en la lluvia interminable que sume al pueblo en el caos.
A través de amores improbables, guerras civiles y profecías olvidadas, la obra reflexiona sobre el tiempo circular y la imposibilidad de escapar al pasado.
El cierre de la saga, con el último Buendía descifrando antiguos pergaminos, revela el trágico final anunciado desde el principio y el sentido de la soledad humana.`,
  },
  {
    uuid: "1b554071-6830-3d74-a331-e5fae04bd7db",
    titulo: "Don Quijote de la Mancha",
    isbn: "9787108374646",
    autor: "Miguel de Cervantes",
    disponible: false,
    precio: 30.0,
    portada: "images/don-quijote.jpg",
    resumen:
      "Las aventuras de un caballero idealista y su fiel escudero, explorando la delgada línea entre la realidad y la fantasía.",
    descuento: 20,
    precioFinal: 24.0,
    resumenLargo: `Alonso Quijano, un hidalgo manchego, enloquece leyendo libros de caballerías y se rebautiza como Don Quijote, defensor de la justicia.
Acompañado de Sancho Panza, su leal escudero, cabalga por España enfrentando molinos que confunde con gigantes y liberando “damiselas” imaginarias.
La obra cuestiona la frontera entre locura y cordura, mostrando la dignidad de los sueños frente a un mundo pragmático y materialista.
Cervantes alterna episodios cómicos y melancólicos, mientras Sancho ofrece un contrapunto de sensatez popular y sabiduría terrenal.
En su regreso, Don Quijote recupera la razón, reconociendo la fuerza de la realidad y el valor de la amistad que perdura más allá de la fantasía.`,
  },
  {
    uuid: "499acb95-60a4-349e-aa2d-9683f982d118",
    titulo: "1984",
    isbn: "9794607862178",
    autor: "George Orwell",
    disponible: true,
    precio: 20.0,
    portada: "images/1984.jpg",
    resumen:
      "Una distopía que describe un mundo totalitario donde el Gran Hermano vigila cada movimiento de los ciudadanos.",
    descuento: 25,
    precioFinal: 15.0,
    resumenLargo: `En Oceanía, Winston Smith trabaja reescribiendo la historia según las directrices del Partido, que controla la verdad y el pensamiento.
El Gran Hermano, figura omnipresente, vigila a través de telepantallas mientras la neolengua redefine el lenguaje para eliminar la disidencia.
Winston inicia un romance prohibido con Julia, desafiando la represión sexual y civil, y sueña con la rebelión de la hermandad clandestina.
La omnipotencia del Estado se refuerza con la tortura y el lavado de cerebro en el Ministerio del Amor, donde Winston acepta finalmente la versión oficial.
La tragedia culmina en la sumisión total de Winston al Partido: ha perdido su individualidad y ama al Gran Hermano, mostrando el triunfo del totalitarismo.`,
  },
  {
    uuid: "37fcaac9-8064-3b51-9003-29b0d8a68e53",
    titulo: "Matar a un Ruiseñor",
    isbn: "9785848100884",
    autor: "Harper Lee",
    disponible: true,
    precio: 35.0,
    portada: "images/matar-a-un-ruisenor.jpg",
    resumen:
      "Una conmovedora historia sobre la injusticia racial y la pérdida de la inocencia en el sur de los Estados Unidos.",
    descuento: 5,
    precioFinal: 33.25,
    resumenLargo: `Scout Finch, una niña curiosa e ingeniosa, narra sus vivencias en Maycomb, Alabama, durante la Gran Depresión.
Su padre, Atticus Finch, abogado íntegro, defiende a Tom Robinson, un hombre negro acusado injustamente de violar a una mujer blanca.
La comunidad segregada reacciona con hostilidad, mientras Scout y su hermano Jem aprenden sobre el racismo, la compasión y el coraje moral.
El misterioso Boo Radley, vecino recluso, simboliza la bondad oculta tras el miedo y el prejuicio, y rescata a los niños de un peligro real.
La novela combina las vivencias infantiles con un potente alegato contra la injusticia, mostrando el poder redentor de la empatía.`,
  },
  {
    uuid: "8e7cf434-63e9-3f76-91b4-c312e2cef293",
    titulo: "Orgullo y Prejuicio",
    isbn: "9785004325076",
    autor: "Jane Austen",
    disponible: true,
    precio: 10.0,
    portada: "images/orgullo-y-prejuicio.jpg",
    resumen:
      "Una novela romántica que explora las complejidades del amor, el orgullo y los prejuicios en la sociedad inglesa del siglo XIX.",
    descuento: 12,
    precioFinal: 8.8,
    resumenLargo: `Elizabeth Bennet, inteligente y de espíritu libre, rechaza las propuestas de matrimonio que no respetan su independencia.
La relación con el orgulloso señor Darcy evoluciona de la tensión y el malentendido al reconocimiento mutuo de virtudes y sentimientos.
Jane Austen retrata con ironía las convenciones sociales, las diferencias de clase y la importancia de la honestidad y el autoconocimiento.
Las visitas a Pemberley y los gestos crecientes de Darcy revelan que el verdadero amor supera el orgullo y los prejuicios iniciales.
Al cerrarse el relato con dos bodas, la novela celebra el triunfo de la felicidad personal y la igualdad de sentimientos entre amantes.`,
  },
  {
    uuid: "a539c6ea-dbfa-3b09-aa1b-354e1698dd6e",
    titulo: "Crimen y Castigo",
    isbn: "9783396425510",
    autor: "Fiódor Dostoyevski",
    disponible: true,
    precio: 40.5,
    portada: "images/crimen-y-castigo.jpg",
    resumen:
      "La lucha moral de un joven estudiante después de cometer un asesinato, explorando temas de culpa y redención.",
    descuento: 18,
    precioFinal: 33.21,
    resumenLargo: `Rodion Raskólnikov, estudiante empobrecido en San Petersburgo, planifica y ejecuta el asesinato de una vieja usurera.
Tras el acto, su conciencia y paranoia se convierten en tormentos interiores que distorsionan su percepción de la realidad.
La relación con Sonia, joven prostituta de gran fe, enciende en Raskólnikov la posibilidad de arrepentimiento y salvación.
Los interrogatorios del implacable investigador Porfirio revelan la tensión entre la ley humana y la justicia moral.
Al final, la expiación en Siberia simboliza la dura senda de la redención, mostrando que sólo el sufrimiento puede purgar la culpa.`,
  },
  {
    uuid: "7219a7e5-b255-32f0-b236-ccc198d9838a",
    titulo: "El Gran Gatsby",
    isbn: "9783737848732",
    autor: "F. Scott Fitzgerald",
    disponible: true,
    precio: 18.0,
    portada: "images/el-gran-gatsby.jpg",
    resumen:
      "Una crítica a la sociedad estadounidense de los años 20 a través de la vida de Jay Gatsby y su obsesión por el amor perdido.",
    descuento: 22,
    precioFinal: 14.04,
    resumenLargo: `Nick Carraway narra su encuentro con Jay Gatsby, misterioso millonario que organiza fiestas suntuosas en Long Island.
La pasión de Gatsby por Daisy Buchanan, su amor de juventud, lo impulsa a amasar una fortuna sin reparar en medios ni consecuencias.
Fitzgerald retrata la frivolidad, la ambición y el desencanto de la Era del Jazz, donde el Sueño Americano choca con la realidad.
Entre alcohol, escándalos y traiciones, emergen los vacíos emocionales de personajes atrapados en el materialismo.
El trágico desenlace de Gatsby, rechazado por la sociedad que idolatró, abre un cuestionamiento sobre el valor del amor y la soledad personal.`,
  },
  {
    uuid: "612af592-4342-362d-bc48-349515f9e204",
    titulo: "La Odisea",
    isbn: "9797373732478",
    autor: "Homero",
    disponible: false,
    precio: 22.5,
    portada: "images/la-odisea.jpg",
    resumen:
      "La épica aventura de Odiseo mientras intenta regresar a casa después de la guerra de Troya, enfrentándose a dioses y monstruos.",
    descuento: 8,
    precioFinal: 20.7,
    resumenLargo: `Tras diez años de guerra en Troya, Odiseo emprende su regreso a Ítaca, pero el viaje se prolonga otros diez años de desafíos.
Encuentra cíclopes, encantadoras náyades y el canto mortal de las sirenas, poniendo a prueba su astucia y determinación.
La diosa Atenea le brinda ayuda disfrazada, mientras Poseidón castiga su orgullo con tempestades y prolongada penuria.
En Ítaca, su fiel esposa Penélope y su hijo Telémaco resisten la presión de los pretendientes que desean usurpar su palacio.
Finalmente, Odiseo regresa disfrazado, recupera su hogar con astucia y revela su identidad para restaurar el orden y la justicia.`,
  },
];

export default libros;
