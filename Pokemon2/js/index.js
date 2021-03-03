class PokemonTCGCatalog {
  constructor() {
    this.pageSize = 4;
    this.currentPage = 1;
    this.cards = [];
    this.newCards = [];
    this.catalog = null;
    this.button = null;
    this.loader = null;
    this.search = null;
    this.info = null;

    this.API = "https://api.pokemontcg.io";
    this.API_VERSION = "v1";
    this.API_RESOURCE = "cards";

    this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;
    this.UiSelectors = {
      content: "[data-content]",
      button: "[data-button]",
      loader: "[data-loader]",
      search: "search",
      card: "[data-card]",
      info: "[data-info]",
    };
  }

  async initializeCatalog() {
    this.catalog = document.querySelector(this.UiSelectors.content);
    this.button = document.querySelector(this.UiSelectors.button);
    this.loader = document.querySelector(this.UiSelectors.loader);
    this.search = document.getElementById(this.UiSelectors.search);
    this.info = document.querySelector(this.UiSelectors.info);
    this.addEventListeners();
    this.pullCards();
  }

  addEventListeners() {
    this.button.addEventListener("click", () => this.pullCards());
    this.search.addEventListener("keyup", () => this.filterCards());
  }

  async pullCards() {
    this.toogleShowElement(this.loader, this.button);
    //console.log("hey");
    const { cards } = await this.fetchData(
      `${this.API_ENDPOINT}?page=${this.currentPage}&pageSize=${this.pageSize}`
    );

    this.toogleShowElement(this.loader, this.button);

    this.cards = [...this.cards, ...cards];

    this.newCards = [...cards];

    this.createCatalog(this.newCards);
    this.currentPage++;
  }

  toogleShowElement(...elements) {
    elements.forEach((element) => element.classList.toggle("hide"));
  }

  async fetchData(url) {
    //console.log("hey");
    const response = await fetch(url);
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    return parsedResponse;
  }

  createCatalog(cards) {
    this.catalog.insertAdjacentHTML("beforeend", [
      cards.map((card) => this.createCard(card)).join(""),
    ]);
  }

  createCard({ name, number, imageUrl, supertype, subtype, rarity, id }) {
    return `
    <article class="card" id=${id} data-card>
      <header class="card__header">
        <h2 class="card__heading">${name}</h2>
        <p class="card__number">${number}</p>
      </header>
      <img class="card__image" src="${imageUrl}" alt="${name}"></img>
      <p class="card__description">Supertype: ${supertype}</p>
      <p class="card__description">Subtype: ${subtype}</p>
      <p class="card__description ${rarity ? "" : "hide"}">Rarity: ${rarity}</p>
    </article>`;
  }

  filterCards() {
    const searchQuery = this.search.value.toLowerCase();

    searchQuery.length
      ? this.button.classList.add("hide")
      : this.button.classList.remove("hide");

    document
      .querySelectorAll(this.UiSelectors.card)
      .forEach((element) => element.classList.remove("hide"));

    const filteredCards = this.cards.filter(
      ({ name }) => !name.toLocaleLowerCase().includes(searchQuery)
    );

    filteredCards.length == this.cards.length
      ? this.info.classList.remove("hide")
      : this.info.classList.add("hide");

    filteredCards.forEach(({ id }) =>
      document.getElementById(id).classList.add("hide")
    );
  }
}
