document.addEventListener("DOMContentLoaded", function() {
    const novenyekLista = document.getElementById("novenyek-lista");

    function megjelenitNovenyek(data) {
        data.forEach(noveny => {
            const novenyElem = document.createElement("div");
            novenyElem.className = "noveny";

            const novenyNev = document.createElement("h2");
            novenyNev.textContent = noveny.name;

            const novenyLeiras = document.createElement("p");
            novenyLeiras.innerHTML = noveny.description;

            const novenyKep = document.createElement("img");
            novenyKep.src = noveny.imageUrl;
            novenyKep.alt = noveny.name;
            
            novenyKep.addEventListener("click", function() {
                megjelenitKep(noveny.imageUrl);
            });

            novenyElem.appendChild(novenyNev);
            novenyElem.appendChild(novenyLeiras);
            novenyElem.appendChild(novenyKep);

            novenyekLista.appendChild(novenyElem);
        });
    }

    function megjelenitKep(url) {
        const overlay = document.createElement("div");
        overlay.className = "overlay";

        const nagyKep = document.createElement("img");
        nagyKep.src = url;
        nagyKep.className = "nagy-kep";

        overlay.appendChild(nagyKep);
        document.body.appendChild(overlay);

        overlay.addEventListener("click", function() {
            document.body.removeChild(overlay);
        });
    }
    fetch("https://raw.githubusercontent.com/android/sunflower/main/app/src/main/assets/plants.json")
        .then(response => response.json())
        .then(data => megjelenitNovenyek(data))
        .catch(error => console.error("Hiba történt a json betöltésekor:", error));
});
