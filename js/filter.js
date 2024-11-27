
fetch('../data/filters.json')
    .then(response => {
        if (!response.ok) throw new Error("Hiba a fájl betöltésekor");
        return response.json();
    })
    .then(filters => {
        const filter = filters[pageIndex - 1];
        console.log(filters)
        if (!filter) throw new Error("Nincs adat ehhez az oldalhoz");
        document.getElementById("filter-name").textContent = `Név: ${filter.name}`;
        document.getElementById("filter-price").textContent = `Ár: ${filter.price} `;
        document.getElementById("filter-description").textContent = `Leírás: ${filter.description}`;
    })
    .catch(error => console.error("Hiba:", error.message));