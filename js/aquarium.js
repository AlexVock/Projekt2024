
fetch('../data/aquariums.json')
    .then(response => {
        if (!response.ok) throw new Error("Hiba a fájl betöltésekor");
        return response.json();
    })
    .then(aquariums => {
        const aquarium = aquariums[pageIndex - 1];
        console.log(aquariums)
        if (!aquarium) throw new Error("Nincs adat ehhez az oldalhoz");
        document.getElementById("aquarium-name").textContent = `Név: ${aquarium.name}`;
        document.getElementById("aquarium-price").textContent = `Ár: ${aquarium.price} `;
        document.getElementById("aquarium-description").textContent = `Leírás: ${aquarium.description}`;
    })
    .catch(error => console.error("Hiba:", error.message));

    
    