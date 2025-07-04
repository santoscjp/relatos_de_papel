const API_BASE = "https://gateway-production-e4a9.up.railway.app/ms-books-catalogue/api/v1/books";

export async function getBooks() {
  const res = await fetch(`${API_BASE}/search`);
  if (!res.ok) throw new Error("Error al obtener todos los libros");

  const json = await res.json();
  return (json.data.books || []).map(mapBook);
}

export async function getBookById(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error("Libro no encontrado");
  const json = await res.json();
  return mapBook(json.data);
}

export async function getBooksFulltext(query) {
  const res = await fetch(`${API_BASE}/fulltext?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Error en la búsqueda full-text");

  const json = await res.json();
  return (json.data || []).map(mapBook);
}

function mapBook(apiBook) {
  return {
    uuid: apiBook.id,
    titulo: apiBook.title,
    autor: apiBook.author,
    isbn: apiBook.isbn,
    disponible: apiBook.visible,
    portada: "1984.jpg",
    resumen: apiBook.description || "",
    resumenLargo: apiBook.description || "",
    precio: apiBook.price,
    descuento: apiBook.discount,
    precioFinal: apiBook.price - apiBook.discount,
    categoria: apiBook.category,
    fechaPublicacion: apiBook.publicationDate,
    stock: apiBook.stock,
    rating: apiBook.rating,
  };
}
