// let API_key = "1d7698ea36fa431abb078ec351507e01";
// const API_URL = `https://api.rawg.io/api/games?key=${API_key}&dates=2019-01-01,2019-12-31&ordering=-rating`
const API_URL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating`;

const container = document.querySelector(".container");
let numberToView = 8;

const getGames = async (numberOfGames) => {
  try {
    //GET RESPONSE AND PARSE AS JSON
    const response = await fetch(API_URL);
    const results = await response.json();
    const gameList = results.results;
    //CREATE HTML ELEMENTS
    let html = "";
    for (let i = 0; i < numberOfGames; i++) {
      //h2 name
      const name = gameList[i].name;
      const nameHeading = createElement("h2", `class="name"`, name);

      //p rating
      const rating = gameList[i].rating;
      const ratingId = `stars${i}`;
      const starRating = createElement("span", `class="stars"`, createElement("span", `class="star-rating" id=${ratingId} data-rating=${rating}`));
      const ratingPara = createElement("p", `class="rating"`, `Rating: ${rating} ${starRating}`);

      //p number of tags
      const numberOfTags = gameList[i].tags.length;
      const numberOfTagsPara = createElement("p", `class="tags"`, `Number of tags: ${numberOfTags}`);

      //img game image
      const image = gameList[i].background_image;
      const imageImg = createElement("div", `class="image-wrapper"`, createElement("img", `src="${image}" alt="${name}-screenshot"`));
      html += createElement("div", `class="games game-${[i + 1]}"`, nameHeading + imageImg + ratingPara + numberOfTagsPara);
    }
    //button view more
    const viewMoreButton = createElement("button", `class="view-more"`, "View More");
    //UPDATE INNER HTML
    container.classList.remove("loading");
    container.innerHTML = html + currentlyViewing() + viewMoreButton;
    //ADD STAR RATING
    const allStars = document.querySelectorAll(`.star-rating`);
    setStarRating(allStars);
    const button = document.querySelector(".view-more");
    if (numberToView < gameList.length) {
      button.onclick = handleClick;
    } else if (numberToView + 3 > gameList.length) {
      numberToView = gameList.length;
      button.onclick = handleClick;
      button.disabled = true;
      button.innerHTML = "No more games to view";
    }
  } catch (error) {
    container.classList.remove("loading");
    container.innerHTML = createElement("div", `class="error"`, `Looks like somethings gone wrong on our end`);
    console.log("There was an error somewhere looks like a: " + error);
  }
};

getGames(numberToView);
