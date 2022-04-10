function adicionarFilme(){
  var filmeFavorito=document.getElementById("filme").value;
  if(filmeFavorito.endsWith(".jpg")){
    listarFilmesNaTela(filmeFavorito);
  }else{
    alert("Endereço de filme invalido, favor colocar um endereço com final .jpg");
  }
  document.getElementById("filme").value="";
}

function listarFilmesNaTela(filme){
  var elementoFilmeFavorito = "<img src="+filme +">";
    var elementoListaFilmes=document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML= elementoListaFilmes.innerHTML+     elementoFilmeFavorito;
}