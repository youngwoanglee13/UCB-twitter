class Twitter {
  constructor() {
    this.posts = [];
  }
  postear(titulo, detalle) {
    if(titulo.length != 0) {
    this.posts.push({ titulo, detalle });
    }else{
      alert("No es posible publicar un post sin título");
    }
  }
}
export default Twitter;