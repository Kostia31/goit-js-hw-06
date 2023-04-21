const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
  
];

const listRef = document.querySelector("#ingredients");

 const itemList = function(array){
   array.forEach((li) => {
     const addLiItem = document.createElement("li");
     addLiItem.textContent = li;
     addLiItem.classList = "item";
     listRef.append(addLiItem);
   });
 }

itemList(ingredients);
