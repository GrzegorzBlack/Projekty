const loadBtn = document.querySelector(".loadBtn");
const inputSearch = document.querySelector(".input");
let size = 4;
//let page = 1;
//let api = `https://api.pokemontcg.io/v1/cards?pageSize=4&page=${page}`;
let api = `https://api.pokemontcg.io/v1/cards?pageSize=${size}`;

const section = document.querySelector(".card");
let pokemons = [];

//let cards = [];
//console.log(page);
loadBtn.addEventListener("click", () => {
  console.log("working");
  fetch(api)
    .then((response) => response.json())
    //.then((data) => console.log(data))

    .then((obj) =>
      //console.log(cards);
      obj.cards.forEach((element) => {
        if (pokemons.includes(element.id)) {
          return;
        } else {
          pokemons.push(element.id);
          cards.push(element);
          //console.log(cards);
          console.log(element.name);
          section.innerHTML += `<div class="pokemon"><p>${element.name}</p>
        <img src=${element.imageUrl}><p><strong>Supertype:</strong>
        ${element.supertype}</p><p><strong>Subtype:</strong> ${element.subtype}</p>
        <p><strong>Rarity:</strong> ${element.rarity}</p></div>`;
        }
      })
    );
  size += 4;
  api = `https://api.pokemontcg.io/v1/cards?pageSize=${size}`;
  //api = `https://api.pokemontcg.io/v1/cards?pageSize=4&page=${page}`;
});

inputSearch.addEventListener("input", (e) => {
  const searchCard = e.target.value.toLowerCase();
  const pokemonList = document.querySelectorAll(".pokemon");
  console.log(pokemonList);
  pokemonList.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchCard)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

//Poniżej inny sposób filtrowania

// inputSearch.addEventListener("input", (e) => {
//   const searchCard = e.target.value.toLowerCase();
//   const thisCards = cards.filter((card) => {
//     console.log(card.name.toLowerCase().search(searchCard));
//     return !card.name.toLowerCase().search(searchCard);
//   });
//   console.log(thisCards);

// });
