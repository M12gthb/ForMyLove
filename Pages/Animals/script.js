const data = [
    {
        name: "Bee",
        link: "PageAnimals/Bee/index.html",
        icon: "../Animals/assets/abelha.svg",
    },{ 
        name: "Butterfly",
        link: "PageAnimals/Butterfly/index.html",
        icon: "../Animals/assets/borboleta.svg"
    },{
        name: "Cat",
        link: "PageAnimals/Cat/index.html",
        icon: "../Animals/assets/gato.svg"
    },{
        name: "Chick",
        link: "PageAnimals/Chick/index.html",
        icon: "../Animals/assets/desenhar-chick.svg"
    },{
        name: "Crab",
        link: "PageAnimals/Crab/index.html",
        icon: "../Animals/assets/crab.svg"
    },{
        name: "Dragon",
        link: "PageAnimals/Dragon/index.html",
        icon: "../Animals/assets/dragao.svg"
    },{
        name: "Duck",
        link: "PageAnimals/Duck/index.html",
        icon: "../Animals/assets/pato-de-borracha.svg"
    },{
        name: "Frog",
        link: "PageAnimals/Frog/index.html",
        icon: "../Animals/assets/frog.svg"
    },
    {
        name: "Rabbit",
        link: "PageAnimals/Rabbit/index.html",
        icon: "../Animals/assets/rabbit.svg"
    },
    {
        name: "Squid",
        link: "PageAnimals/Squid/index.html",
        icon: "../Animals/assets/squid.svg"
    }
]

function renderLinks(data) {
    const root = document.querySelector(".root")

    data.map((element) => {
        const icone = document.createElement("img")
        const link = document.createElement("a")
        const item = document.createElement("div")


        item.className = "item"

        icone.src = element.icon
        icone.alt = element.name
        icone.className = "item-icone"

        link.href = element.link
        link.innerHTML = element.name
        link.className = "item-link"


        item.append(icone,link)
        root.appendChild(item)
    })
}

renderLinks(data)