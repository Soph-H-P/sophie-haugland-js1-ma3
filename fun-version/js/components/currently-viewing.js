const currentlyViewing = () => {
  return createElement("p", `class="currently-viewing"`, `Currently viewing: The top ${numberToView} highest rated games`);
};

const handleClick = () => {
  numberToView += 3;
  getGames(numberToView);
};
