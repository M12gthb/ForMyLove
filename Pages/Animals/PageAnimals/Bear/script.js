const data = [
    {
        name: "Bear",
        link: "../../PageAnimals/Bear/Bear-1/index.html",
        icon: "../../assets/mascara-de-urso.svg",
    },{ 
        name: "Bear 2",
        link: "../../PageAnimals/Bear/Bear-2/index.html",
        icon: "../../assets/mascara-de-urso.svg"
    },{
        name: "Bear 3",
        link: "../../PageAnimals/Bear/Bear-3/index.html",
        icon: "../../assets/mascara-de-urso.svg"
    },{
        name: "Bear 4",
        link: "../../PageAnimals/Bear/Bear-4/index.html",
        icon: "../../assets/mascara-de-urso.svg"
    },{
        name: "Bear 5",
        link: "../../PageAnimals/Bear/Bear-5/index.html",
        icon: "../../assets/mascara-de-urso.svg"
    },{
        name: "Bear 6",
        link: "../../PageAnimals/Bear/Bear-6/index.html",
        icon: "../../assets/mascara-de-urso.svg"
    },{
        name: "Bear 7",
        link: "../../PageAnimals/Bear/Bear-7/index.html",
        icon: "../../assets/mascara-de-urso.svg"
    },
    {
        name: "Bear 8",
        link: "../../PageAnimals/Bear/Bear-8/index.html",
        icon: "../../assets/mascara-de-urso.svg"
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