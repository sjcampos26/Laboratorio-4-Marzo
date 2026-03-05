class Libro {
  constructor(titulo, autor, genero, anio) {
    // titulo      → string
    // autor       → string
    // genero      → string (ej: "Ficción", "Ciencia")
    // anio        → number
    // disponible  → boolean, inicia en true
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.anio = anio;
    this.disponible = true; // inicia disponible
  }
  info() {
    // Retorna: "[Título] de [Autor] ([Año]) - Disponible / Prestado"
    
    return `${this.titulo} de ${this.autor} (${this.anio}) - 
    ${this.disponible ? "Disponible" : "Prestado" }`}
}

class Biblioteca {
  constructor(nombre) {
    // nombre  → string
    // libros  → arreglo vacío
    this.nombre = nombre;
    this.libros = [];
    }

    agregarLibro(libro) {
        //- Recibe una instancia de `Libro`
        //- Si ya existe un libro con el mismo título: muestra error con `console.error` y no lo agrega
        //- Si no existe: agrega el libro y confirma con `console.log`

        const existe = this.libros.find( //Recorrer el arreglo de libros
        (l) => l.titulo.toLowerCase() === libro.titulo.toLowerCase()
        );

        if (existe) {
        console.error("Libro ya existente.");
        return;
        }

        this.libros.push(libro);
        console.log(`Libro agregado: ${libro.titulo}`);
    }
}

  
  