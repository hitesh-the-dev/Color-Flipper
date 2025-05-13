const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "olive",
  "aqua",
  "silver",
  "gold",
  "beige",
  "coral",
  "crimson",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "mint",
  "plum",
  "salmon",
  "tan",
  "tomato",
  "violet",
  "wheat",
  "azure",
  "chocolate",
  "darkblue",
  "darkgreen",
  "darkred",
];

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

let change = document.getElementById("change");
let simple = document.getElementById("simple");
let Hex = document.getElementById("Hex");
let JADU = document.getElementById("JADU");
let showColor = document.getElementById("showColor");

change.addEventListener("click", () => {
  let index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
  showColor.innerHTML = colors[index];
  if (document.body.style.backgroundColor === "black")
    document.body.style.color = "White";
  else document.body.style.color = "black";
  document.body.style.backgroundImage = "none";
});

simple.addEventListener("click", () => {
  let index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
  showColor.innerHTML = colors[index];
  if (document.body.style.backgroundColor === "black")
    document.body.style.color = "White";
  else document.body.style.color = "black";

  document.body.style.backgroundImage = "none";
});

Hex.addEventListener("click", () => {
  let colorHex = "#";
  console.log("HEllo");
  for (let i = 0; i <= 5; i++) {
    let index = Math.floor(Math.random() * hex.length);
    colorHex += hex[index];
  }
  // document.body.style.background = `linear-gradient(white, white)`;
  document.body.style.backgroundColor = colorHex;

  showColor.innerHTML = colorHex;
  if (document.body.style.backgroundColor === "black")
    document.body.style.color = "White";
  else document.body.style.color = "black";

  document.body.style.backgroundImage = "none";
});

JADU.addEventListener("click", () => {
  let value1 = Math.floor(Math.random() * 255);
  let value2 = Math.floor(Math.random() * 255);
  let value3 = Math.floor(Math.random() * 255);
  let color1 = `rgb(${value1}, ${value2}, ${value3})`;

  let value4 = Math.floor(Math.random() * 255);
  let value5 = Math.floor(Math.random() * 255);
  let value6 = Math.floor(Math.random() * 255);
  let color2 = `rgb(${value4}, ${value5}, ${value6})`;

  document.body.style.background = `linear-gradient(${color1}, ${color2})`;

  change.style.backgroundImage = `url("./back1.jpeg")`;
  change.style.backgroundClip = "text";
  change.style.webkitBackgroundClip = "text";
  change.style.color = "transparent";
  change.style.webkitTextFillColor = "transparent";
  change.style.backgroundSize = "cover";
  change.style.display = "inline-block";
  showColor.innerHTML = "combine";
});
