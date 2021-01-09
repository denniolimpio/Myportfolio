

$(document).ready(function(){

  // cliccando sul tasto freccia destra genero un evento

  // slider img successiva
  $(".next").click (

    function() {
      immagineSuccessiva();

    });

    // cliccando sul tasto freccia sinistra genero un evento

    // slider img precedente
    $(".prev").click (

      function() {
        immaginePrecedente();


      });

})// #funzione1
function immagineSuccessiva() {


  // definisco la mia variabile riferita all'immagine che al momento risulta selezionata,visibile
  var immagineSelezionata = $(".thumbnails-container .thumbnail.active");

  // rimuovo la classe " active" all'elemento che al momento è visibile e(..)
  immagineSelezionata.removeClass("active");


  //Se immagineSelezionata e cerchioAttivo ha classe "last", allora aggiungo al'elemento con classe "first" , la classe "active".
  //In questo modo dopo l'ultima immagine riappare la prima.

  if(immagineSelezionata.hasClass("last")){
    $(".thumbnails-container .thumbnail.last").addClass("active");
    $(".nav i.first").addClass("active");

  } else {
    // aggiungo la classe " active" all'immagine successiva.

    immagineSelezionata.next().addClass("active");
    cerchioAttivo.next().addClass("active");

  }

};


//ho bisogno di una funzione che, cliccando sulla freccia sx, mi permetta di passare dall'immagine corrente a quella precedente
// questa stessa funzione deve evidenziare il cerchietto dell'immagine che è visibile in quel momento.

// #funzione 2


function immaginePrecedente() {

  // definisco la mia variabile riferita all'elemento che al momento risulta selezionata,visibile

  var immagineSelezionata = $(".thumbnails-container .thumbnail.active");
  var cerchioAttivo = $( ".nav i.active");

  // rimuovo la classe " active" all'elemento che al momento è visibile e(..)
  immagineSelezionata.removeClass("active");
  cerchioAttivo.removeClass("active");


  //Se immagineSelezionata e cerchioAttivo  ha classe "first", allora aggiungo al'elemento con classe "last" , la classe "active"
  //In questo modo dopo la prima immagine riappare l'ultima.


  if(immagineSelezionata.hasClass("first")) {
    $(".thumbnails-container .thumbnail.last").addClass("active");

    $ (".nav i.last").addClass("active");

  } else {


    immagineSelezionata.prev().addClass("active");
    cerchioAttivo.prev().addClass("active");
  }
}
