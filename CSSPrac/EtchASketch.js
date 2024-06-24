const div = document.querySelector("#container");

for(let i = 0; i < 16; i++) {
    const divT = document.createElement("div");
    divT.className = "square1";
    for(let j = 0; j < 16; j++) {
        const divS = document.createElement("div");
        divS.className = "square2";
        // divS.textContent = "a";
        divT.appendChild(divS);
    }
    container.appendChild(divT);
}