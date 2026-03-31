const categoriesEl = document.querySelector("#categories");
const categoriesListEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListEl.length}`);

categoriesListEl.forEach((arr) => {
  const titleEl = arr.querySelector("h2");
  const textTitleEl = titleEl.textContent;
  console.log(`Category: ${textTitleEl}`);

  const listEl = arr.querySelectorAll("li");
  const listItemEl = listEl.length;
  console.log(listItemEl);
});
