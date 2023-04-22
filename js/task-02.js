const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector("#ingredients");

const itemList = function (array) {
  const list = []
  array.forEach((li) => {
    const addLiItem = document.createElement("li");
    addLiItem.textContent = li;
    addLiItem.classList = "item";
    list.push(addLiItem);
  });

  listRef.append(...list);
};

itemList(ingredients);
