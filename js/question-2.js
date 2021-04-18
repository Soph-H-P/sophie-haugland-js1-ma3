let API_key = "1d7698ea36fa431abb078ec351507e01";
const API_URL = `https://api.rawg.io/api/games?key=${API_key}&dates=2019-01-01,2019-12-31&ordering=-rating`;
// const API_URL = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating`;

const elementCreator = (htmlTag = "div", className = "", innerValue = "") => {
  return `<${htmlTag} class="${className}">${innerValue}</${htmlTag}>`;
};

const container = document.querySelector(".container");

const getGames = async () => {
  try {
    //GET RESPONSE AND PARSE AS JSON
    const response = await fetch(API_URL);
    const results = await response.json();
    const gameList = results.results;
    //CREATE HTML ELEMENTS
    let html = "";
    for (let i = 0; i < 8; i++) {
      //h2 name
      const name = gameList[i].name;
      const nameHeading = elementCreator("h2", `name`, name);

      //p rating
      const rating = gameList[i].rating;
      const ratingPara = elementCreator("p", `rating`, `Rating: ${rating}/5`);

      //p number of tags
      const numberOfTags = gameList[i].tags.length;
      const numberOfTagsPara = elementCreator("p", `tags`, `Number of tags: ${numberOfTags}`);

      html += elementCreator("div", `games game-${[i + 1]}`, nameHeading + ratingPara + numberOfTagsPara);
    }
    //UPDATE INNER HTML
    container.classList.remove("loading");
    container.innerHTML = html;
  } catch (error) {
    container.classList.remove("loading");
    container.innerHTML = elementCreator("div", "error", `Looks like somethings gone wrong on our end`);
    console.log(`There was an error type of error:  ${error}`);
  }
};

getGames();
