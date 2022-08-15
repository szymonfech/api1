window.onload = function () {
  let input = document.getElementById("input");
  let button = document.getElementById("button");

  button.addEventListener("click", function () {
    fetch("https://api.tvmaze.com/search/shows?q=" + input.value)
      .then((response) => response.json())
      .then((data) => generateDataResults(data));
  });

  function generateDataResults(data) {
    document.querySelector(".container").innerHTML = "";
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let newCard = document.createElement("div");
      newCard.classList.add("card");
      let cardDescription = document.createElement("div");
      cardDescription.classList.add("card-description");
      let cardName = document.createElement("span");
      cardName.classList.add("name");
      cardName.innerHTML = data[i].show.name;
      let cardCategory = document.createElement("span");
      cardCategory.classList.add("category");
      cardCategory.innerHTML = data[i].show.genres;
      let cardImg = document.createElement("img");
      if (data[i].show.image) {
        cardImg.setAttribute("src", data[i].show.image.medium);
      } else {
        cardImg.setAttribute("src", "pngegg.png");
      }
      let cardInfo = document.createElement("p");
      cardInfo.classList.add("summary");
      cardInfo.innerHTML = data[i].show.summary;
      console.log(cardName);
      cardDescription.append(cardImg, cardName, cardCategory, cardInfo);
      newCard.appendChild(cardDescription);
      document.querySelector(".container").appendChild(newCard);
    }
  }
};
