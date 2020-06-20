var quote=document.getElementById("quote")
var quoteAuthor=document.getElementById("author")
var xhr = new XMLHttpRequest();
var resposta = xhr.open(
    "GET",
    "https://quote-garden.herokuapp.com/api/v2/quotes/random"
  );
  xhr.send();
  //ESCUTAR A REPOSTA DA REQUISIÇÃO E POR NUM ELEMENTO DO HTML OU IMPRIMIR NO CONSOLE
  
  xhr.addEventListener("load", function () {
    //nos retorna a resposta em JSON e depois converte para objeto
    var resposta = xhr.responseText;
    var resposta1 = JSON.parse(resposta);
    var quoteText=resposta1["quote"]["quoteText"]
    var quoteAuthor1=resposta1["quote"]["quoteAuthor"]
    console.log(resposta1)
    quote.innerHTML=quoteText
    quoteAuthor.innerHTML=quoteAuthor1

}
)