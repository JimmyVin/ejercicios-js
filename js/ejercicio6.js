

alert("Programa que determine si una letra es consonante o vocal");

let letra = prompt("Escriba la letra que desea evaluar");
document.getElementById("letra").innerHTML = "La letra ingresada es : " + letra;

switch (letra) {
    case  "A":
      alert("ES VOCAL");
      document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
      break;
    case "E":
      alert("ES VOCAL");
      document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
      break;
    case "I":
      alert("ES VOCAL");
      document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
      break;
    case  "O":
      alert("ES VOCAL");
      document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
      break;
    case "U":
      alert("ES VOCAL");
      document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
      break;
      case "a" :
        alert("ES VOCAL");
        document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
        break;
      case "e":
        alert("ES VOCAL");
        document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
        break;
      case "i":
        alert("ES VOCAL");
        document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
        break;
      case "o":
        alert("ES VOCAL");
        document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
        break;
      case "u":
        alert("ES VOCAL");
        document.getElementById("vocal").innerHTML ="La letra ingresada " + letra + " es: vocal";
        break;
    default:
      alert("ES CONSONANTE");
      document.getElementById("consonante").innerHTML ="la letra ingresada " + letra + " es: consonante";
  }
  



