const setStarRating = (nodeList) => {
  for (let i = 0; i < nodeList.length; i++) {
    let starRatingColor = document.querySelector(`#stars${[i]}`);
    starRatingColor.style.width = `${starRatingColor.dataset.rating}em`;
  }
};
