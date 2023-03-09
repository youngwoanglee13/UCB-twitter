import Twitter from "./Twitter.js";

const titulo = document.querySelector("#TituloPost");
const detalle = document.querySelector("#DetallePost");
const form = document.querySelector("#publicar-form");
const div = document.querySelector("#listaDePosts-div");
const TwitterApp = new Twitter();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tituloPost = titulo.value.toUpperCase();
  const detallePost = detalle.value;
  TwitterApp.postear(tituloPost, detallePost);
  
  div.innerHTML =TwitterApp.getListaDePosts();
});
