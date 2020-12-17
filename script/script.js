

//Servidores Base
 var dl160Sas = {"Nombre":"DL160 SFF", "Precio":"1374", "MemoriaMaxima": "128", "ProcesadorMaximo":"10", "DiscosMaximo":"8", "Disco":"sas", "Stock":"4", "puntosAcumulados":"" }
 var dl180Sas = {"Nombre":"DL180 SFF", "Precio":"1862", "MemoriaMaxima": "256", "ProcesadorMaximo":"12", "DiscosMaximo":"8", "Disco":"sas", "Stock":"2", "puntosAcumulados":"" }
 var dl160 = {"Nombre":"DL160 LFF",  "Precio":"1300", "MemoriaMaxima": "128", "ProcesadorMaximo":"10", "DiscosMaximo":"8", "Disco":"sata", "Stock":"4", "puntosAcumulados":"" }
 var dl180 = {"Nombre":"DL180 LFF",  "Precio":"1800", "MemoriaMaxima": "256", "ProcesadorMaximo":"12", "DiscosMaximo":"8", "Disco":"sata", "Stock":"2", "puntosAcumulados":"" }
 var dl360 = {"Nombre":"DL360",  "Precio":"2185", "MemoriaMaxima": "256", "ProcesadorMaximo":"16", "DiscosMaximo":"8", "Disco":"sas", "Stock":"6", "puntosAcumulados":"" }
 var dl360Sata = {"Nombre":"DL360 LFF",  "Precio":"2047", "MemoriaMaxima": "512", "ProcesadorMaximo":"16", "DiscosMaximo":"8", "Disco":"sata", "Stock":"7", "puntosAcumulados":"" }
 var dl380 = {"Nombre":"DL380",  "Precio":"2605", "MemoriaMaxima": "768", "ProcesadorMaximo":"18", "DiscosMaximo":"8", "Disco":"sas", "Stock":"2", "puntosAcumulados":"" }
 var dl380Sata = {"Nombre":"DL380 LFF",  "Precio":"2523", "MemoriaMaxima": "768", "ProcesadorMaximo":"18", "DiscosMaximo":"8", "Disco":"sata", "Stock":"1", "puntosAcumulados":"" }  
 
 //stock de procesadores, memorias y discos. Con precios y caracteristicas
var stock = {
  "Procesador": {
    "cores6":{
      "cantidad":"0",
      "numeroDeParte": "P11124-B21",
      "precio":"343",
      "nombre":"6 cores"
    },
    "cores8":{
      "cantidad":"",
      "numeroDeParte": "P11147-B21",
      "precio":"625",
      "nombre":"8 cores"
    },
    "cores10":{
      "cantidad":"3",
      "numeroDeParte": "P02492-B21",
      "precio":"673",
      "nombre":"10 cores"
    },
    "cores16":{
      "cantidad":"2",
      "numeroDeParte": "P02592-B21",
      "precio":"1581",
      "nombre":"16 cores"
    },
    "cores18":{
      "cantidad":"1",
      "numeroDeParte": "P02499-B21",
      "precio":"2036",
      "nombre":"18 cores"
    }
  },
  "Memoria":{
    "memo16": {
      "cantidad":"34",
      "numeroDeParte": "00P922-B21",
      "precio":"150",
      "nombre":"16 Gb"
      
    },
    "memo32": {
      "cantidad":"21",
      "numeroDeParte": "00P924-B21",
      "precio":"200",
      "nombre":"32 Gb"
    }
  
},

"Discos":{
  "disco480sff": {
    "cantidadStock":"5",
    "cantidad":"",
    "numeroDeParte": "P18432-B21",
    "precio":"310",
    "tipo":"sff",
    "velocidad":"ssd",
    "nombre":"480Gb SSD",
  },
  "disco960sff": {
    "cantidadStock":"15",
    "cantidad":"",
    "numeroDeParte": "P18434-B21",
    "precio":"458",
    "tipo":"sff",
    "velocidad":"ssd",
    "nombre":"960Gb SSD", 
  },
  "disco12sff": {
    "cantidadStock":"7",
    "cantidad":"",
    "numeroDeParte": "872479-B21",
    "precio":"496",
    "tipo":"sff",
    "velocidad":"sas",
    "nombre":"1.2 TB",
  },
  "disco24sff": {
    "cantidadStock":"3",
    "cantidad":"",
    "numeroDeParte": "881457-B21",
    "precio":"683",
    "tipo":"sff",
    "velocidad":"sas",
    "nombre":"2.4 TB",
  },
  "disco480lff": {
    "cantidadStock":"3",
    "cantidad":"",
    "numeroDeParte": "P04499-B21",
    "precio":"279",
    "tipo":"lff",
    "velocidad":"ssd",
    "nombre":"480Gb SSD",
  },
  "disco960lff": {
    "cantidadStock":"12",
    "cantidad":"",
    "numeroDeParte": "P09691-B21",
    "precio":"279",
    "tipo":"lff",
    "velocidad":"ssd",
    "nombre":"960Gb SSD",
  },
  "disco4000lff": {
    "cantidadStock":"6",
    "cantidad":"",
    "numeroDeParte": "801888-B21",
    "precio":"277",
    "tipo":"lff",
    "velocidad":"sata",
    "nombre":"4 TB",
  },
  "disco8000lff": {
    "cantidadStock":"4",
    "cantidad":"",
    "numeroDeParte": "834031-B21",
    "precio":"442",
    "tipo":"lff",
    "velocidad":"sata",
    "nombre":"8 TB",
  },
  

}


}
 
var miServidor = {
  "Procesador":"",
  "Memoria":"",
  "Discos":"[]",
  "TipoDisco":"",

  }


//Eleccion de discos SAS o SATA
function velocidad()
{
  $("#botonVelocidad").fadeOut();

  var sasOsata = $(".velocidad").val();

if (sasOsata == "1") {

  $("#sas").fadeIn("slow");
  $("#sata").hide();
  
}

if (sasOsata == "2") {

  $("#sata").fadeIn("slow");
  $("#sas").hide();
}
}
 
//chequea cantidad de discos y cuales se eligieron
function discosSas(){

  
  miServidor.TipoDisco = "sas"
  sumarSata = false
  sumarSas = true

  var disco480s = $("#cantSas1").val();
  var disco960s = $("#cantSas2").val();
  var disco12 = $("#cantSas3").val();
  var disco24 = $("#cantSas4").val();

  cantidadDiscosSas = Number(disco480s) + Number(disco960s) + Number(disco12) + Number(disco24)

  d480s = stock.Discos.disco480sff
  d960s = stock.Discos.disco960sff
  d12 = stock.Discos.disco12sff
  d24 = stock.Discos.disco24sff

  d480s.cantidad = disco480s
  d960s.cantidad = disco960s
  d12.cantidad = disco12
  d24.cantidad = disco24
  
  cantidadDiscosFinal = [d480s, d960s, d12, d24]

  if (cantidadDiscosSas > 8)
  {
    alert("La cantidad de discos no puede ser mayor a 8")

  }else{
    $("#botonSas").fadeOut();
    $("#cotizar").fadeIn("slow");
  }

}

function discosSata(){
  
  miServidor.TipoDisco = "sata"
  sumarSata = true
  sumarSas = false
  var disco480 = $("#cantSata1").val();
  var disco960 = $("#cantSata2").val();
  var disco4 = $("#cantSata4").val();
  var disco8 = $("#cantSata5").val();

  cantidadDiscosSata = Number(disco480) + Number(disco960) + Number(disco4) + Number(disco8)

  d480sata = stock.Discos.disco480lff
  d960sata = stock.Discos.disco960lff
  d4 = stock.Discos.disco4000lff
  d8 = stock.Discos.disco8000lff

  d480sata.cantidad = disco480
  d960sata.cantidad = disco960
  d4.cantidad = disco4
  d8.cantidad = disco8

  cantidadDiscosFinal = [d480sata, d960sata, d4, d8]

  
  if (cantidadDiscosSata > 8)
  {
    alert("La cantidad de discos no puede ser mayor a 8")

  }else{
    $("#botonSata").fadeOut();
    $("#cotizar").fadeIn("slow");
  }


}

//empieza a buscar el servidor base que mejor se adapte a lo seleccionado
function buscar() {
 
//eleccion de procesador segun los cores
  miServidor.Procesador = $("#procesadores").val();

  switch (miServidor.Procesador) {
    case "6":
      procesadorFinal = stock.Procesador.cores6
      procesador6 = true

      break;

    case "8":
      procesadorFinal = stock.Procesador.cores8
      procesador8 = true
        break;

    case "10":
      procesadorFinal = stock.Procesador.cores10
      procesador10 = true
      break;

    case "16":
      procesadorFinal = stock.Procesador.cores16
      procesador16 = true
      break;
    
    case "18":
      procesadorFinal = stock.Procesador.cores18
      procesador18 = true
      break;
      
  
    default:
      break;
  }

  // Divide en memorias de 16 o 32 segun el total elegido.
  miServidor.Memoria = $(".memos").val();

  m16 = stock.Memoria.memo16
  m32 = stock.Memoria.memo32

  if(Number(miServidor.Memoria) > 256){

    memoriaFinal = m32

    memoriaParaDividir = miServidor.Memoria

    memoriaDividida = memoriaParaDividir / 32

    precioMemoria = memoriaDividida * m32.precio

  } else if(Number(miServidor.Memoria) < 512){

    memoriaFinal = m16

    memoriaParaDividir = miServidor.Memoria

    memoriaDividida = memoriaParaDividir / 16

    precioMemoria = memoriaDividida * m16.precio

  }

//valida cada caracteristica elegida. Cada servidor base va sumando puntos, el que tenga mas puntos es el indicado
var servidores = [dl160Sas, dl180Sas, dl160, dl180, dl360, dl360Sata, dl380, dl380Sata ]
diferenciaDeMemosAcumulada = 0
for (let index = 0; index < servidores.length; index++) {
  
    if (Number(miServidor.Procesador) <= Number(servidores[index].ProcesadorMaximo) ) {

     servidores[index].puntosAcumulados++
      
    }

    if (Number(miServidor.Memoria) <= Number(servidores[index].MemoriaMaxima)  ) {
      servidores[index].puntosAcumulados++
  
    }

    if (miServidor.TipoDisco == servidores[index].Disco ) {

      servidores[index].puntosAcumulados++
      
    }

  
}

//elige el servidor base mas barato en case de empate
     servidores.sort(function(a, b){return a.Precio - b.Precio})
    servidores[0].puntosAcumulados++
//ordena por puntos de mayor a menor
    servidores.sort(function(a, b){return b.puntosAcumulados - a.puntosAcumulados})
    console.log(servidores[0].Nombre)

servidorBaseFinal = servidores[0]

mostrarServidor(servidorBaseFinal, procesadorFinal, memoriaFinal, memoriaDividida, cantidadDiscosFinal )

}

//La funcion que muestra en pantalla cada parte elegida y el precio total
 function mostrarServidor(servidorElegido, procesadorElegido, MemoriaElegida, cantidadDeMemoriaElegida, DiscosElegidos) {
 


$("#nombreServidor").text("Modelo de sevidor ideal: " + servidorElegido.Nombre);
$("#procesadorElegido").text("Procesador elegido: " + procesadorElegido.nombre);
$("#memoriaServidor").text("Tamaño de memoria utilizado: " + MemoriaElegida.nombre);
$("#cantidadMemoriaServidor").text("cantidad de memorias: " + cantidadDeMemoriaElegida);

var discosAcumulados
var discosAcumulados1
var discosAcumulados2
var discosAcumulados3
for (let index = 0; index < DiscosElegidos.length; index++) {
  if(DiscosElegidos[0].cantidad > 0){$("#disco1").text(" Disco " + DiscosElegidos[0].nombre + " cantidad: " + DiscosElegidos[0].cantidad); discosAcumulados = Number(DiscosElegidos[0].precio) * Number(DiscosElegidos[0].cantidad) }else if(DiscosElegidos[0].cantidad == 0) {discosAcumulados = 0}
  if(DiscosElegidos[1].cantidad > 0){$("#disco2").text(" Disco " + DiscosElegidos[1].nombre + " cantidad: " + DiscosElegidos[1].cantidad); discosAcumulados1 = Number(DiscosElegidos[1].precio) * Number(DiscosElegidos[1].cantidad)}else if(DiscosElegidos[1].cantidad == 0) {discosAcumulados1 = 0}
  if(DiscosElegidos[2].cantidad > 0){$("#disco3").text(" Disco " + DiscosElegidos[2].nombre + " cantidad: " + DiscosElegidos[2].cantidad); discosAcumulados2 = Number(DiscosElegidos[2].precio) * Number(DiscosElegidos[2].cantidad)}else if(DiscosElegidos[2].cantidad == 0) {discosAcumulados2 = 0}
  if(DiscosElegidos[3].cantidad > 0){$("#disco4").text(" Disco " + DiscosElegidos[3].nombre + " cantidad: " + DiscosElegidos[3].cantidad); discosAcumulados3 = Number(DiscosElegidos[3].precio) * Number(DiscosElegidos[3].cantidad)}else if(DiscosElegidos[3].cantidad == 0) {discosAcumulados3 = 0}

}

sumaTotal = Number(servidorElegido.Precio) + Number(procesadorElegido.precio) + (Number(MemoriaElegida.precio) * Number(cantidadDeMemoriaElegida)) + discosAcumulados + discosAcumulados1 + discosAcumulados2 + discosAcumulados3 
console.log(servidorElegido.Precio)

$("#precio").text("Precio total del servidor: usd " + sumaTotal )

$("#cotizar").hide();
$(".resultado").fadeIn("slow");
$("#botonDolar").fadeIn("slow");
}


//chequea el tipo de cambio actual
function ConsultarAPI(){
  
  $.ajax({
      type: "GET",
      url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
      dataType: "json",
      success: function (response) {
          $("#JsonResponse").html(response[0].casa.venta)
          console.log(response)
      }
  });

}