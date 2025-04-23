const retos = [
    {id: 0, desc: "🌪️ Vueltita", bits: 50, subs: 0},
    {id: 1, desc: "🦒 Stream de pie", bits: 250, subs: 1},
    {id: 2, desc: "🦵 5 Sentadillas", bits: 300, subs: 2},
    {id: 3, desc: "🎈 Globo Zing", bits: 500, subs: 3},
    {id: 4, desc: "🔥 Velita", bits: 500, subs: 3},
    {id: 5, desc: "✒️ Zing", bits: 666, subs: 2},
    {id: 6, desc: "🧄 Ajo", bits: 777, subs: 7},
    {id: 7, desc: "💥 Explotar globo", bits: 1000, subs: 7},
    {id: 8, desc: "💃 Baile de Fortnite", bits: 1500, subs: 10},
    {id: 9, desc: "🎨 Dibujo", bits: 2000, subs: 14},
    {id: 10, desc: "🍪 Harina", bits: 5000, subs: 25},
    {id: 11, desc: "🧅 Cebolla", bits: 8000, subs: 50},
]

window.addEventListener("load", () => {
    const content = document.querySelector("#content");
    if (content){
        retos.map((challenge, index) => {
            let {desc, bits, subs} = challenge
            let challengeContainer = document.createElement("div");
            challengeContainer.classList.add("challenge");
            
            let challengeDesc = document.createElement("div");
            challengeDesc.classList.add("challenge-description");
            challengeDesc.textContent = desc;

            if(challenge.id === 1){
                let span = document.createElement("span");
                span.textContent = "(acumulable 2 veces)"
                challengeDesc.appendChild(span);
            }

            let challengePrice = document.createElement("div");
            challengePrice.classList.add("challenge-price");

            let challengeBits = document.createElement("span");
            challengeBits.classList.add("challenge-bits");
            challengeBits.textContent = `${new Intl.NumberFormat("es-CL").format(bits)} bits`;

            challengePrice.appendChild(challengeBits);

            if(challenge.id >0 ){
                let challengeSubs = document.createElement("span");
                challengeSubs.classList.add("challenge-subs");
                challengeSubs.textContent = `${subs == 1 ? subs + " sub" : subs + " subs"}`;
                challengePrice.appendChild(challengeSubs);
            }

            challengeContainer.appendChild(challengeDesc);
            challengeContainer.appendChild(challengePrice);

            content.appendChild(challengeContainer);                        
        })
    }
    
})
