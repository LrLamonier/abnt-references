////////////////////////
// Clipboard function
////////////////////////

const clipboardFunction = function () {
  const btnCopy = document.querySelector(".btn-copy");
  const referenceText = document.querySelector(".reference").innerHTML;
  const functionCopy = function (e) {
    function listener(e) {
      e.clipboardData.setData("text/html", referenceText);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    // deprecated method to be fixed
    document.execCommand("copy");
  };

  btnCopy.removeEventListener("click", functionCopy);
  btnCopy.addEventListener("click", functionCopy);
};

////////////////////////
// Empty form error
////////////////////////

const errorMessage = function () {
  document.querySelector(".reference").innerHTML = "Referência inválida!";
};

////////////////////////
// Generating book reference
////////////////////////

const generateBook = function (array) {
  if (array[4] === "") {
    return errorMessage();
  }

  // Author
  let authorNameFinal = "";
  const authorName = function (name) {
    return `${name
      .slice(name.lastIndexOf(" ") + 1)
      .toUpperCase()}, ${name.slice(0, name.indexOf(" "))}`;
  };
  if (array[1] !== "" && array[3] === true) {
    authorNameFinal = `${authorName(array[1])} et al.`;
  } else if (array[1] !== "" && array[2] !== "") {
    authorNameFinal = `${authorName(array[1])}; ${authorName(array[2])}.`;
  } else if (array[1] === "" && array[2] !== "") {
    authorNameFinal = `${authorName(array[2])}.`;
  } else if (array[1] !== "" && array[2] === "") {
    authorNameFinal = `${authorName(array[1])}.`;
  }

  // Title
  let titleFinal = "";
  if (array[4] !== "") {
    titleFinal = ` <strong>${array[4]}</strong>`;
  }

  // Subtitle
  let subtitle = "";
  if (array[5] === "" && array[4] !== "") {
    subtitle = `.`;
  }
  if (array[5] !== "") {
    subtitle = `: ${array[5]}.`;
  }

  // Edition
  let edition = "";
  if (array[6] !== "") {
    edition = ` ${array[6]}. ed.`;
  }

  // City
  let city = "";
  if (array[7] !== "" && array[8] !== "") {
    city = ` ${array[7]}:`;
  }
  if (array[7] !== "" && array[9] !== "") {
    city = ` ${array[7]},`;
  }

  // Publisher
  let publisher = "";
  if (array[8] !== "" && array[9] !== "") {
    publisher = ` ${array[8]},`;
  }
  if (array[8] !== "" && array[9] === "") {
    publisher = ` ${array[8]}.`;
  }

  // Year
  let year = "";
  if (array[9] !== "") {
    year = ` ${array[9]}.`;
  }

  // Available in
  let link = "";
  if (array[10] !== "") {
    link = ` Disponível em: &#60;${array[10]}&#62;.`;
  }

  // Access date
  let date = "";
  if (array[10] !== "") {
    date = ` Acesso em: ${array[11]} ${array[12]}. ${array[13]}.`;
  }

  const finalReference = `${authorNameFinal}${titleFinal}${subtitle}${edition}${city}${publisher}${year}${link}${date}`;

  const target = document.querySelector(".reference");

  target.innerHTML = finalReference;

  clipboardFunction();
};

////////////////////////
// Generating article reference
////////////////////////

const generateArticle = function (array) {
  if (array[4] === "") {
    return errorMessage();
  }

  // Author
  let authorNameFinal = "";
  const authorName = function (name) {
    return `${name
      .slice(name.lastIndexOf(" ") + 1)
      .toUpperCase()}, ${name.slice(0, name.indexOf(" "))}`;
  };
  if (array[1] !== "" && array[3] === true) {
    authorNameFinal = `${authorName(array[1])} et al.`;
  } else if (array[1] !== "" && array[2] !== "") {
    authorNameFinal = `${authorName(array[1])}; ${authorName(array[2])}.`;
  } else if (array[1] === "" && array[2] !== "") {
    authorNameFinal = `${authorName(array[2])}.`;
  } else if (array[1] !== "" && array[2] === "") {
    authorNameFinal = `${authorName(array[1])}.`;
  }

  // Title
  let titleFinal = "";
  if (array[4] !== "") {
    titleFinal = ` ${array[4]}`;
  }

  // Subtitle
  let subtitle = "";
  if (array[5] === "" && array[4] !== "") {
    subtitle = `.`;
  }
  if (array[5] !== "") {
    subtitle = `: ${array[5]}.`;
  }

  // Journal
  let journal = "";
  if (array[6] !== "") {
    journal = ` <strong>${array[6]}</strong>,`;
  }

  // City
  let city = "";
  if (array[7] !== "") {
    city = ` ${array[7]},`;
  }

  // Volume
  let volume = "";
  if (array[8] !== "") {
    volume = ` v. ${array[8]}`;
  }

  // Number
  let number = "";
  if (array[9] !== "") {
    number = ` n. ${array[9]},`;
  }

  // Pages
  let pages = "";
  if (array[10] !== "" && array[11] !== "") {
    pages = ` p. ${array[10]}-${array[11]},`;
  }
  if (array[10] !== "" && array[11] === "") {
    pages = ` p. ${array[10]},`;
  }

  // Year
  let year = "";
  if (array[12] !== "") {
    year = ` ${array[12]}.`;
  }

  // Available in
  let link = "";
  if (array[13] !== "") {
    link = ` Disponível em: &#60;${array[13]}&#62;.`;
  }

  // Access date
  let date = "";
  if (array[13] !== "") {
    date = ` Acesso em: ${array[14]} ${array[15]}. ${array[16]}.`;
  }

  const finalReference = `${authorNameFinal}${titleFinal}${subtitle}${journal}${city}${volume}${number}${pages}${year}${link}${date}`;

  const target = document.querySelector(".reference");

  target.innerHTML = finalReference;

  clipboardFunction();
};

////////////////////////
// Generating event reference
////////////////////////

const generateEvent = function (array) {
  if (array[1] === "") {
    return errorMessage();
  }

  // Event name
  let eventName = `${array[1].toUpperCase()},`;

  // Event number
  let eventNumber = "";
  if (array[2] !== "") {
    eventNumber = ` ${array[2]}.,`;
  }

  // Event year
  let eventYear = "";
  if (array[3] !== "") {
    eventYear = ` ${array[3]},`;
  }

  // City
  let city = "";
  if (array[4] !== "") {
    city = ` ${array[4]}.`;
  }

  // Document title
  let docTitle = "";
  if (array[5] !== "") {
    docTitle = ` <strong>${array[5]}</strong>.`;
  }

  // Publisher city
  let locale = "";
  if (array[6] !== "") {
    locale = ` ${array[6]}:`;
  }

  // Publisher
  let publisher = "";
  if (array[7] !== "") {
    publisher = ` ${array[7]},`;
  }

  // Year
  let year = "";
  if (array[8] !== "") {
    year = ` ${array[8]}.`;
  }

  // Available in
  let link = "";
  if (array[9] !== "") {
    link = ` Disponível em: &#60;${array[9]}&#62;.`;
  }

  // Access date
  let date = "";
  if (array[9] !== "") {
    date = ` Acesso em: ${array[10]} ${array[11]}. ${array[12]}.`;
  }

  const finalReference = `${eventName}${eventNumber}${eventYear}${city}${docTitle}${locale}${publisher}${year}${link}${date}`;

  const target = document.querySelector(".reference");

  target.innerHTML = finalReference;

  clipboardFunction();
};

////////////////////////
// Generating presentation reference
////////////////////////

const generatePresentation = function (array) {
  if (array[4] === "") {
    return errorMessage();
  }

  // Author
  let authorNameFinal = "";
  const authorName = function (name) {
    return `${name
      .slice(name.lastIndexOf(" ") + 1)
      .toUpperCase()}, ${name.slice(0, name.indexOf(" "))}`;
  };
  if (array[1] !== "" && array[3] === true) {
    authorNameFinal = `${authorName(array[1])} et al.`;
  } else if (array[1] !== "" && array[2] !== "") {
    authorNameFinal = `${authorName(array[1])}; ${authorName(array[2])}.`;
  } else if (array[1] === "" && array[2] !== "") {
    authorNameFinal = `${authorName(array[2])}.`;
  } else if (array[1] !== "" && array[2] === "") {
    authorNameFinal = `${authorName(array[1])}.`;
  }

  // Title
  let titleFinal = "";
  if (array[4] !== "") {
    titleFinal = ` ${array[4]}`;
  }

  // Event name
  let eventName = ` In: ${array[5].toUpperCase()},`;

  // Event number
  let eventNumber = ` ${array[6]},`;

  // Event year
  let eventYear = ` ${array[7]},`;

  // City
  let city = ` ${array[8]}.`;

  // Document title
  let title = ` <strong>${array[9]}</strong>.`;

  // Pblisher city
  let pubCity = ` ${array[10]}:`;

  // Publisher
  let publisher = ` ${array[11]},`;

  // Publisher year
  let pubYear = ` ${array[12]},`;

  // Pages
  let pages = "";
  if (array[13] !== "" && array[14] !== "") {
    pages = ` p. ${array[13]}-${array[14]}.`;
  }
  if (array[13] !== "" && array[14] === "") {
    pages = ` p. ${array[13]}.`;
  }

  // Available in
  let link = "";
  if (array[15] !== "") {
    link = ` Disponível em: &#60;${array[15]}&#62;.`;
  }

  // Access date
  let date = "";
  if (array[15] !== "") {
    date = ` Acesso em: ${array[16]} ${array[17]}. ${array[18]}.`;
  }

  const finalReference = `${authorNameFinal}${titleFinal}${eventName}${city}${title}${pubCity}${publisher}${pubYear}${pages}`;

  console.log(finalReference);

  const target = document.querySelector(".reference");

  target.innerHTML = finalReference;

  clipboardFunction();
};

////////////////////////
// Submitting form
////////////////////////
let reference;

const getData = function (e) {
  e.preventDefault();
  const data = [];
  const formLength = document
    .querySelector(".reference-form")
    .querySelectorAll("input").length;
  for (let i = 0; i < formLength; i++) {
    const field = document.forms["reference-form"].elements[i];
    const type = document.forms["reference-form"].elements[i].type;
    if (type === "text") {
      data.push(field.value);
    } else {
      data.push(field.checked);
    }
  }

  if (data[0] === "book") {
    generateBook(data);
  }
  if (data[0] === "article") {
    generateArticle(data);
  }
  if (data[0] === "event") {
    generateEvent(data);
  }
  if (data[0] === "presentation") {
    generatePresentation(data);
  }

  const referenceBox = document.querySelector(".reference-box");
  const backgroundAnimation = function (element) {
    element.style.backgroundColor = "#68e9dc";
    setTimeout(() => (element.style.backgroundColor = "#ffffff"), 1500);
  };
  backgroundAnimation(referenceBox);
};

btnSubmit.addEventListener("click", getData);

////////////////////////
// Clear form
////////////////////////
btnClear.addEventListener("click", function (e) {
  e.preventDefault();
  form.reset();
});
