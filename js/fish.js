
fetch('../data/fishes.json')
    .then(response => {
        if (!response.ok) throw new Error("Hiba a fájl betöltésekor");
        return response.json();
    })
    .then(fishes => {
        const fish = fishes[pageIndex - 1];
        console.log(fishes)
        if (!fish) throw new Error("Nincs adat ehhez az oldalhoz");
        document.getElementById("fish-name").textContent = `Név: ${fish.name}`;
        document.getElementById("fish-price").textContent = `Ár: ${fish.price} `;
        document.getElementById("fish-description").textContent = `Leírás: ${fish.description}`;
    })
    .catch(error => console.error("Hiba:", error.message));