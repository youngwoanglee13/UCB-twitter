class Twitter {
  constructor() {
    this.posts = [];
  }
  postear(titulo, detalle) {
    if(titulo.length == 0) {
        alert("No es posible publicar un post sin título");
        return false;
    }
    if(titulo.length > 50) {
        alert("El título no puede superar los 50 caracteres");
        return false;
    }
    this.posts.push({ titulo, detalle });
    return true;     
  }
  getListaDePosts() {
    this.lista ="prueba";
    for (let i = 0; i < this.posts.length; i++) {
      this.lista= "<p>" + this.posts[i].titulo +"<br>"+ this.posts[i].detalle + "</p>";
    }
    return this.lista;
  }
}
export default Twitter;