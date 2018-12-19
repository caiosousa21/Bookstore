export const buscarLista = () => {
    // if(!this.EstadoLocal){
    let url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=';
    function Get(urlLista) {
      var Httpreq = new XMLHttpRequest();
      Httpreq.open('GET', urlLista, false);
      Httpreq.send(null);
      return Httpreq.responseText;
    }
    let ListaListas = JSON.parse(Get(url));
    let Listas = [];
    for (let i = 0; i < 4; i++) {
      let url = 'https://api.nytimes.com/svc/books/v3/lists.json?api-key=7a7846ce976e4df6ae218249bfb3a631&list=' + ListaListas.results[i].list_name_encoded;
      function Get(urlLista) {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open('GET', urlLista, false);
        Httpreq.send(null);
        return Httpreq.responseText;
      }
      let ListaLivros = JSON.parse(Get(url));
      let ListaLivrosa = [];
      for (let i = 0; i < ListaLivros.results.length; i++) {
        ListaLivrosa[i] = {
          titulo: ListaLivros.results[i].book_details[0].title,
          autor: ListaLivros.results[i].book_details[0].author,
          editora: ListaLivros.results[i].book_details[0].publisher,
          data: ListaLivros.results[i].published_date
        };
      }
      Listas[i] = { a: ListaListas.results[i].list_name, b: ListaLivrosa };
    }
    return (Listas)
    // }
  }