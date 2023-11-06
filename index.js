const padlOrel = Math.random() < 0.5

const vysledek = document.querySelector(".vysledek")
const mince = document.querySelector(".mince")

if (padlOrel) {
    vysledek.textContent = "Padl orel."
    mince.classList.add("mince--orel")
}

else {
    vysledek.textContent = "Padla panna."
    mince.classList.add("mince--panna")
}


