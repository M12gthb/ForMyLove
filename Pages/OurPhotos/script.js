const dataBase = [
    {
        src: "../../assets/Himylove.jpg",
        letter: "Oi meu amor!"
    },
    {
        src: "../../assets/FirstIloveYou.jpg",
        letter: "Primeiro de tudo, eu te amo!"
    },
    {
        src: "../../assets/TheSame.jpg",
        letter: "Acho que a gente combina!"
    },
    {
        src: "../../assets/YouCalmdown.jpg",
        letter: "Tu me acalma!"
    },
    {
        src: "../../assets/YouandMe.jpg",
        letter: "Gosto muito é de ti!"
    },
    {
        src: "../../assets/Rats.webp",
        letter: "Nós somos doidos"
    },
    {
        src: "../../assets/Forever.jpg",
        letter: "Nós sempre juntos!"
    },
    {
        src: "../../assets/yourBear.jpg",
        letter: "Sou seu ursinho!"
    },
    {
        src: "../../assets/loveYourSmile.jpg",
        letter: "Amo teu sorriso!"
    },
    {
        src: "../../assets/inmyarms.jpg",
        letter: "Amo te abraçar!"
    },
    {
        src: "../../assets/imgkiss.jpg",
        letter: "Amo te beijar!"
    },
    {
        src: "../../assets/FishKiss.jpg",
        letter: "Amo quando tu faz biquinho de peixe!"
    },
    {
        src: "../../assets/imgZoeira.jpeg",
        letter: "Amo frescar contigo!"
    },
    {
        src: "../../assets/imgZoeira.jpeg",
        letter: "Amo frescar contigo!"
    },
    {
        src: "../../assets/loveYourSmile.jpg",
        letter: "Amo teu sorriso!"
    },
    {
        src: "../../assets/crazyYou.jpg",
        letter: "Amo tuas caretas"
    },
    {
        src: "../../assets/imgTogether.jpg",
        letter: "Amo nós dois juntos!"
    },
    {
        src: "../../assets/HAPPYyoU.jpg",
        letter: "Nós somos muito felizes"
    },
    {
        src: "../../assets/SurrenderForHer.jpg",
        letter: "Completamente rendido por essa garota!"
    },
    {
        src: "../../assets/MerryChristimas.jpg",
        letter: "Feliz natal!"
    },
    {
        src: "../../assets/MyRealLove.jpg",
        letter: "Você é meu verdadeiro amor!"
    }
]

let currentIndex = 0;
let isTransitioning = false;

function render() {
    const photo = document.querySelector(".photos");
    const img = document.createElement("div");
    const text = document.createElement("h3");

    img.className = "img";
    text.innerText = dataBase[currentIndex].letter;
    img.style.setProperty("--bg-image", `url(${dataBase[currentIndex].src})`);

    photo.innerHTML = "";
    photo.append(img, text);

    if (currentIndex === dataBase.length - 1) {
        const anchor = document.createElement("a");
        anchor.href = "#";
        anchor.innerText = "Voltar"; 
        anchor.addEventListener("click", handleAnchorClick);
        photo.appendChild(anchor);
    }

    if (currentIndex == 0) {
        const text = document.createElement("h3");
        text.innerText = "Passe para o lado >"; 
        photo.appendChild(text);
    }


    window.addEventListener("touchmove", handleTouchMove);
}

function handleTouchMove(event) {
    if (isTransitioning) {
        return;
    }

    const touchX = event.changedTouches[0].clientX;

    if (touchX > window.innerWidth / 2 && currentIndex < dataBase.length - 1) {
        isTransitioning = true;
        renderNextItem();
    } else if (touchX < window.innerWidth / 2 && currentIndex > 0) {
        isTransitioning = true;
        renderPreviousItem();
    }
}

function handleAnchorClick(event) {
    event.preventDefault(); 
    window.location.href = "../../index.html"
}

function renderNextItem() {
    currentIndex = Math.min(currentIndex + 1, dataBase.length - 1);
    renderWithDelay();
}

function renderPreviousItem() {
    currentIndex = Math.max(currentIndex - 1, 0);
    renderWithDelay();
}

function renderWithDelay() {
    setTimeout(() => {
        isTransitioning = false;
        render();
    }, 500);
}

render();