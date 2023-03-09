import Twitter from "./sumador";

const titulo = document.querySelector("#TituloPost");
const detalle = document.querySelector("#DetallePost");
const form = document.querySelector("#publicar-form");
const div = document.querySelector("#listaDePosts-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tituloPost = titulo.value.toUpperCase();
  const detallePost = detalle.value;

  div.innerHTML = "<p>" + tituloPost +"<br>"+ detallePost + "</p>";
});
