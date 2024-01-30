function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/close_white_36dp.svg";
  }
}

const arrayText = [
  "nós somos a inovação.",
  "nós somos a tecnologia.",
  "nós somos a criatividade.",
  "nós somos a energia.",
  "nós somos o marketing.",
];

const writeTime = 100; // tempo  escrever e apagar.
const changeTextTime = 1000; // tempo para ir para próxima frase no array

let indexSentence = 0;
let indexChar = 0;

const element = document.querySelector("#text");

function writeText() {
  if (indexChar <= arrayText[indexSentence].length) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar++;
    setTimeout(writeText, writeTime);
  } else {
    setTimeout(removeText, changeTextTime);
  }
}

function removeText() {
  if (indexChar >= 0) {
    element.textContent = arrayText[indexSentence].substring(0, indexChar);
    indexChar--;
    setTimeout(removeText, writeTime);
  } else {
    indexSentence++;
    if (indexSentence >= arrayText.length) {
      indexSentence = 0;
    }
    setTimeout(writeText, changeTextTime);
  }
}

writeText();

//botões sectio conteudo
document.getElementById("meuBotao").addEventListener("click", function () {
  // Substitua 'https://www.example.com' pelo link externo desejado
  window.location.href =
    "https://www.behance.net/gallery/186114343/Identidade-Visual-Auto-Drive";
});

document.getElementById("meuBotao1").addEventListener("click", function () {
  // Substitua 'https://www.example.com' pelo link externo desejado
  window.location.href =
    "https://www.behance.net/gallery/185311959/Visual-identity-alleywear";
});

document.getElementById("meuBotao2").addEventListener("click", function () {
  // Substitua 'https://www.example.com' pelo link externo desejado
  window.location.href =
    "https://www.behance.net/gallery/184842573/Acaiva-Identidade-Visual";
});

document.getElementById("meuBotao3").addEventListener("click", function () {
  // Substitua 'https://www.example.com' pelo link externo desejado
  window.location.href =
    "https://www.behance.net/gallery/185589705/Xypher-Produtora-de-Games-Identidade-Visual";
});

//secton serviços
