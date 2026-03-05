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

        let existe = false;

        for (let i = 0; i < this.libros.length; i++) {

            if (
            this.libros[i].titulo.toLowerCase() ===
            libro.titulo.toLowerCase()
            ) {
            existe = true;
            break; // salimos del ciclo porque ya lo encontramos
            }

        }

        if (existe) {
            console.log("El libro ya existe.");
        } else {
            this.libros.push(libro);
            console.log("Libro agregado correctamente.");
        }
    }

    buscarPorGenero(genero) {
    //- Recibe un string con el género
    //- Retorna un arreglo con todos los libros de ese género
    //- La búsqueda no debe ser sensible a mayúsculas (usa `.toLowerCase()`)

    
    }
}

  
  