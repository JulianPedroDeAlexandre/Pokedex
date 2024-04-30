

function criarCard(i){

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => {

        var nq = document.createElement("div")
        nq.classList.add("quadrado")

        var nc = document.createElement("div");
        nc.classList.add("card");

        var ni = document.createElement("img");
        ni.src = data.sprites.front_default;

        var nt = document.createElement("h2");
        nt.textContent = i + " - " +data.name.charAt(0).toUpperCase() + data.name.slice(1).toLowerCase();

        // var np = document.createElement("p");
        // np.textContent = i;

        nq.appendChild(nt);
        nq.appendChild(nc);
        nc.appendChild(ni);
        // nq.appendChild(nt);

        var dm = document.querySelector(".meio");

        dm.appendChild(nq);
    })

}


for (let i = 1; i <= 1025; i++) {
    // Adiciona um atraso de 500 milissegundos (0.5 segundos) entre cada iteração
    setTimeout(() => {
        criarCard(i);
    }, i * 75);
}