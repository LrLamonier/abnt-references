////////////////////////
// Smooth scrolling
////////////////////////

//////////////////////////////
///// Smooth scrolling
//////////////////////////////

const allLinks = document.querySelectorAll(".link-smooth");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll to other sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

////////////////////////
// Fields
////////////////////////

const typeBook = `<input
class="hidden"
id="ref-type"
type="text"
name="ref-type"
value="book"
/>
`;

const typeArticle = `<input
class="hidden"
id="ref-type"
type="text"
name="ref-type"
value="article"
/>
`;

const typeEvent = `<input
class="hidden"
id="ref-type"
type="text"
name="ref-type"
value="event"
/>
`;

const typePresentation = `<input
class="hidden"
id="ref-type"
type="text"
name="ref-type"
value="presentation"
/>
`;

const author = `<div>
<label for="author">Primeiro(a) autor(a):</label>
<input
  id="author"
  type="text"
  placeholder="Cora Coralina"
  name="first-author"
/>
</div>
<div>
<label for="author">Segundo(a) autor(a):</label>
<input
  id="author"
  type="text"
  placeholder="Nome completo"
  name="second-author"
/>
</div>
<div class="checkbox-container">
<label class="label-third" for="author"
  >Três ou mais autores?</label
>
<input class="checkbox-input" id="third-author" type="checkbox" />
</div>
<div></div>
`;

const title = `<div>
<label for="title">Título:</label>
<input
  id="title"
  type="text"
  placeholder="Vintém de cobre"
  name="title"
/>
</div>
`;

const subtitle = `<div>
<label for="subtitle">Subtítulo (se houver):</label>
<input
  id="subtitle"
  type="text"
  placeholder="meias confissões de Aninha"
  name="subtitle"
/>
</div>
`;

const edition = `<div><label for="edition">Edição (se houver):</label>
<input id="edition" type="text" placeholder="2" name="edition" />
</div>
`;

const city = `<div>
<label for="city">Local (cidade):</label>
<input
  id="city"
  type="text"
  placeholder="São Paulo"
  name="city"
/>
</div>
`;

const publisher = `<div>
<label for="publisher">Editora:</label>
<input
  id="publisher"
  type="text"
  placeholder="Global Editora"
  name="publisher"
/>
</div>
`;

const year = `<div>
<label for="year">Ano de publicação:</label>
<input id="year" type="text" placeholder="2012" name="year" />
</div>
`;

const submitBtn = `<button class="btn btn-submit">Gerar referência!</button>
`;

const access = `<div>
<label for="link">Disponível em (opcional):</label>
<input
  id="link"
  type="text"
  placeholder="https://periodicos.utfpr.edu.br/rl/article/view/2328"
  name="link"
/>
</div>
<div>
<label>Acesso em (em caso de acesso <em>on-line</em>):</label>
<div class="inline-input">
  <label for="day">Dia:</label>
  <input
    class="date-input"
    id="day"
    type="text"
    placeholder="2"
    name="day"
  />
  <label for="month">Mês:</label>
  <input
    class="date-input"
    id="month"
    type="text"
    placeholder="ago"
    name="month"
  />
  <label for="year-access">Ano:</label>
  <input
    class="date-input"
    id="year-access"
    type="text"
    placeholder="2020"
    name="year-access"
  />
</div>
</div>
`;

const journal = `<div>
<label for="journal">Nome do periódico:</label>
<input
  id="journal"
  type="text"
  placeholder="The New England Journal of Medicine"
  name="journal"
/>
</div>
`;

const volume = `<div>
<label for="volume">Volume:</label>
<input id="volume" type="text" placeholder="14" name="volume" />
</div>
`;

const number = `<div>
<label for="number">Número:</label>
<input id="number" type="text" placeholder="2" name="number" />
</div>
`;

const pages = `<div>
<label>Página(s):</label>
<div class="inline-input">
  <input
    class="page-input"
    id="pageStart"
    type="text"
    placeholder="9"
    name="pageend"
  />
  <label for="month">a</label>
  <input
    class="page-input"
    id="pageEnd"
    type="text"
    placeholder="14"
    name="pageend"
  />
  <div></div>
</div>
</div>
`;

const eventName = `<div>
<label for="event">Nome do evento:</label>
<input
  id="event"
  type="text"
  placeholder="Congresso Internacional do INES"
/>
</div>
`;

const eventNumber = `<div>
<label for="eventnumber">Numeração (se houver):</label>
<input id="eventnumber" type="text" placeholder="8" />
</div>
`;

const eventYear = `<div>
<label for="year">Ano do evento:</label>
<input id="year" type="text" placeholder="2012" name="year" />
</div>
`;

const proceedings = `<div>
<label for="proceedings">Título do documento:</label>
<input
  id="proceedings"
  type="text"
  placeholder="Proceedings / Anais"
/>
</div>
`;

const locale = `<div>
<label for="locale">Cidade de publicação:</label>
<input
  id="locale"
  type="text"
  placeholder="São Paulo"
/>
</div>
`;

////////////////////////
// Create form book
////////////////////////

const form = document.querySelector(".reference-form");

const createBook = function () {
  form.insertAdjacentHTML("beforeend", typeBook);
  form.insertAdjacentHTML("beforeend", author);
  form.insertAdjacentHTML("beforeend", title);
  form.insertAdjacentHTML("beforeend", subtitle);
  form.insertAdjacentHTML("beforeend", edition);
  form.insertAdjacentHTML("beforeend", city);
  form.insertAdjacentHTML("beforeend", publisher);
  form.insertAdjacentHTML("beforeend", year);
  form.insertAdjacentHTML("beforeend", access);
};
// createBook();

////////////////////////
// Create form article
////////////////////////

const createArticle = function () {
  form.insertAdjacentHTML("beforeend", typeArticle);
  form.insertAdjacentHTML("beforeend", author);
  form.insertAdjacentHTML("beforeend", title);
  form.insertAdjacentHTML("beforeend", subtitle);
  form.insertAdjacentHTML("beforeend", journal);
  form.insertAdjacentHTML("beforeend", city);
  form.insertAdjacentHTML("beforeend", volume);
  form.insertAdjacentHTML("beforeend", number);
  form.insertAdjacentHTML("beforeend", pages);
  form.insertAdjacentHTML("beforeend", year);
  form.insertAdjacentHTML("beforeend", access);
};
// createArticle();

////////////////////////
// Create form event
////////////////////////

const createEvent = function () {
  form.insertAdjacentHTML("beforeend", typeEvent);
  form.insertAdjacentHTML("beforeend", eventName);
  form.insertAdjacentHTML("beforeend", eventNumber);
  form.insertAdjacentHTML("beforeend", eventYear);
  form.insertAdjacentHTML("beforeend", city);
  form.insertAdjacentHTML("beforeend", proceedings);
  form.insertAdjacentHTML("beforeend", locale);
  form.insertAdjacentHTML("beforeend", publisher);
  form.insertAdjacentHTML("beforeend", year);
  form.insertAdjacentHTML("beforeend", access);
};
// createEvent();

////////////////////////
// Create form presentation
////////////////////////

const createPresentation = function () {
  form.insertAdjacentHTML("beforeend", typePresentation);
  form.insertAdjacentHTML("beforeend", author);
  form.insertAdjacentHTML("beforeend", title);
  form.insertAdjacentHTML("beforeend", eventName);
  form.insertAdjacentHTML("beforeend", eventNumber);
  form.insertAdjacentHTML("beforeend", eventYear);
  form.insertAdjacentHTML("beforeend", city);
  form.insertAdjacentHTML("beforeend", proceedings);
  form.insertAdjacentHTML("beforeend", locale);
  form.insertAdjacentHTML("beforeend", publisher);
  form.insertAdjacentHTML("beforeend", year);
  form.insertAdjacentHTML("beforeend", pages);
  form.insertAdjacentHTML("beforeend", access);
};
// createPresentation();

////////////////////////
// Create form patent
////////////////////////

////////////////////////
// Pages
////////////////////////
const btnHome = document.querySelector(".btn-home");
const btnSubmit = document.querySelector(".btn-submit");
const btnClear = document.querySelector(".btn-clear");
const btnBar = document.querySelector(".app-header");
const startPage = document.querySelector(".start");
const referenceForm = document.querySelector(".reference-form");
const btnBook = document.querySelector(".btn-book");
const btnArticle = document.querySelector(".btn-article");
const btnEvent = document.querySelector(".btn-event");
const btnPresentation = document.querySelector(".btn-presentation");

const homePage = function (e) {
  e.preventDefault();
  startPage.classList.remove("hidden");
  referenceForm.classList.add("hidden");
  btnClear.classList.add("hidden");
  btnSubmit.classList.add("hidden");
  btnHome.classList.add("btn-active");
  btnBar.removeChild(btnBar.lastChild);
  btnHome.removeEventListener("click", homePage);
  form.innerHTML = "";
};

const pgBook = function (e) {
  // e.preventDefault();
  startPage.classList.add("hidden");
  btnHome.classList.remove("btn-active");
  referenceForm.classList.remove("hidden");
  btnClear.classList.remove("hidden");
  btnSubmit.classList.remove("hidden");
  createBook();
  btnBar.insertAdjacentHTML(
    "beforeend",
    `<button class="btn">Livro, monografia, dissertação, tese</button>`
  );
  btnHome.addEventListener("click", homePage);
};
btnBook.addEventListener("click", pgBook);

const pgArticle = function (e) {
  startPage.classList.add("hidden");
  btnHome.classList.remove("btn-active");
  referenceForm.classList.remove("hidden");
  btnClear.classList.remove("hidden");
  btnSubmit.classList.remove("hidden");
  createArticle();
  btnBar.insertAdjacentHTML("beforeend", `<button class="btn">Artigo</button>`);
  btnHome.addEventListener("click", homePage);
};
btnArticle.addEventListener("click", pgArticle);

const pgEvent = function (e) {
  startPage.classList.add("hidden");
  btnHome.classList.remove("btn-active");
  referenceForm.classList.remove("hidden");
  btnClear.classList.remove("hidden");
  btnSubmit.classList.remove("hidden");
  createEvent();
  btnBar.insertAdjacentHTML("beforeend", `<button class="btn">Evento</button>`);
  btnHome.addEventListener("click", homePage);
};
btnEvent.addEventListener("click", pgEvent);

const pgPresentation = function (e) {
  // e.preventDefault();
  startPage.classList.add("hidden");
  btnHome.classList.remove("btn-active");
  referenceForm.classList.remove("hidden");
  btnClear.classList.remove("hidden");
  btnSubmit.classList.remove("hidden");
  createPresentation();
  btnBar.insertAdjacentHTML(
    "beforeend",
    `<button class="btn">Apresentação em evento</button>`
  );
  btnHome.addEventListener("click", homePage);
};
btnPresentation.addEventListener("click", pgPresentation);
