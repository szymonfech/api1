window.onload = function () {
  let input = document.getElementById("input");
  let button = document.getElementById("button");

  button.addEventListener("click", function () {
    // fetch Api data with input value
    fetch("https://api.tvmaze.com/search/shows?q=" + input.value)
      .then((response) => response.json())
      .then((data) => generateDataResults(data));
  });

  function generateDataResults(data) {
    document.querySelector(".container").innerHTML = "";
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      //Creating elemets
      let newCard = document.createElement("div");
      let cardDescription = document.createElement("div");
      let cardName = document.createElement("span");
      let cardCategory = document.createElement("span");
      let cardImg = document.createElement("img");
      let cardInfo = document.createElement("p");
      // Adding classes
      newCard.classList.add("card");
      cardDescription.classList.add("card-description");
      cardName.classList.add("name");
      cardCategory.classList.add("category");
      cardInfo.classList.add("summary");
      // Adding values from API
      cardName.innerHTML = "Tytuł: " + data[i].show.name;
      cardCategory.innerHTML = "Kategoria: " + data[i].show.genres;
      cardInfo.innerHTML = data[i].show.summary;
      // Catching lack of img in api
      if (data[i].show.image) {
        cardImg.setAttribute("src", data[i].show.image.medium);
      } else {
        cardImg.setAttribute("src", "pngegg.png");
      }
      // Adding created and adjusted elements to existing DOM
      cardDescription.append(cardImg, cardName, cardCategory, cardInfo);
      newCard.appendChild(cardDescription);
      document.querySelector(".container").appendChild(newCard);
    }
  }
};
