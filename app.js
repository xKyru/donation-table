const retos = [
    {id: 0, desc: "🌪️ Vueltitas", price: 30},
    {id: 1, desc: "🦒 Stream de pie", price: 200},
    {id: 2, desc: "🦵 10 Sentadillas", price: 300},
    {id: 3, desc: "🎈 Globo Zing", price: 500},
    {id: 4, desc: "🔥 Velita", price: 500},
    {id: 5, desc: "🧄 Ajo", price: 666},
    {id: 6, desc: "💥 Explotar globo", price: 1000},
    {id: 7, desc: "💃 Baile de Fortnite", price: 1500},
    {id: 8, desc: "🎨 Dibujo", price: 2000},
    {id: 9, desc: "🍪 Harina", price: 5000},
    {id: 10, desc: "🧅 Cebolla", price: 8000},
]

window.addEventListener("load", () => {
    const content = document.querySelector("#content");
    if (content){
        retos.map((challenge, index) => {
            let {desc, price} = challenge
            let challengeContainer = document.createElement("div");
            challengeContainer.classList.add("challenge");
            
            let challengeDesc = document.createElement("div");
            challengeDesc.classList.add("challenge-description");
            challengeDesc.textContent = desc;

            if(challenge.id === 1){
                let span = document.createElement("span");
                span.textContent = "(máximo 10 minutos)"
                challengeDesc.appendChild(span);
            }

            let challengePrice = document.createElement("div");
            challengePrice.classList.add("challenge-price");
            challengePrice.textContent = `${new Intl.NumberFormat("es-CL").format(price)} bits`;

            challengeContainer.appendChild(challengeDesc);
            challengeContainer.appendChild(challengePrice);

            content.appendChild(challengeContainer);                        
        })
    }
    
})