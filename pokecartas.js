const url ="https://pokeapi.co/api/v2/pokemon/";

const carta = document.getElementById("carta");

const boton = document.getElementById("boton");

let getpokedata = () => {
let id =Math.floor(Math.random() *150)+1;
const finalurl = url + id;

fetch (finalurl)
.then((Response) => Response.json())
.then((data)=> {
    generatecarta(data);
});


};

let generatecarta = (data) => {

const hp = data.stats [0].base_stat;
const imgsrc = data.sprites.other.dream_world.front_default;
const pokename = data.name [0].toUpperCase() + data.name.slice(1);
const statataque = data.stats [1].base_stat;
const statdefensa = data.stats [2].base_stat;
const statvelocidad = data.stats [5].base_stat;

carta.innerHTML = `
    <p class="hp">
        <span>HP</span>
        ${hp}
    </p>
    <img src=${imgsrc} />
    <h2 class="poke-name">${pokename}</h2>
    <div class="tipos">
    <span> tipo 1 </span>
    <span> tipo 2 </span>
        </div>
        <div class="stats">
            <div>
                <h3>${statataque}</h3>
                <p>ataque</p>
            </div>
            <div>
                <h3>${statdefensa}</h3>
                <p>defensa</p>
            </div>
            <div>
                <h3>${statvelocidad}</h3>
                <p>velocidad</p>
            </div>
        </div>
        `;
appendTipos(data.appendTipos);
};
let appendTipos = (tipos) => {
  tipos.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".tipos").appendChild(span);

    
  });      

};

boton.addEventListener("click",getpokedata);
window.addEventListener("load",getpokedata);