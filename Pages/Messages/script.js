const button = document.querySelector("#surpriseBtn")
const message = document.querySelector("#mensageSurprise")
const a = document.querySelector("a")

function showSurprise() {
    let mensageElement = document.getElementById("mensageSurprise");
    let surpriseBtn = document.getElementById("surpriseBtn");
  
    let mensagens = [
      "Você é a razão do meu sorriso 😁",
      "Te amo demais ❤️",
      "Não posso ficar sem ti 😞",
      "Sou deseperado por ti 😩",
      "Estou disposto a ficar contigo por muitas decadas 👩‍🦯🧑🏻‍🦯",
      "Amo teus olinhos 🥺",
      "Esse rostinho mds 🥹",
      "Teu 🐻",
      "Minha 🦊",
      "❤️🧡🩷"
    ];

    
    let mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  
    mensageElement.textContent = mensagemAleatoria;
    mensageElement.style.display = "block";
    surpriseBtn.style.display = "none";
    a.style.display = "block"
  }

button.addEventListener("click", () => showSurprise())

message.addEventListener("click", () => showSurprise())