const div = document.querySelector("#container");
let numOfRows = 64;

const butt = document.querySelector("#btn");

butt.addEventListener("click", event => {
    littleSquares.forEach((d) => {
           d.style.background = "#6ab6d8";
    });
})

let handleSubmit = (val) => {
    numOfRows = val;
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    createRows(numOfRows);
    const littleSquares = document.querySelectorAll(".square2");
    littleSquares.forEach((d) => {
        d.addEventListener("mouseover", (event) => {
            event.target.style.background = "red";
        });
    });
    const butt = document.querySelector("#btn");
        butt.addEventListener("click", event => {
        littleSquares.forEach((d) => {
            d.style.background = "#6ab6d8";
        });
    })
}

let createRows = (n) => {
    for(let i = 0; i < n; i++) {
        const divT = document.createElement("div");
        divT.className = "square1";
        for(let j = 0; j < n; j++) {
            const divS = document.createElement("div");
            divS.className = "square2";
            // divS.textContent = "a";
            divT.appendChild(divS);
        }
        container.appendChild(divT);
    }
}


createRows(numOfRows);

const littleSquares = document.querySelectorAll(".square2");


littleSquares.forEach((d) => {
    d.addEventListener("mouseover", (event) => {
        event.target.style.background = "red";
    });
});
