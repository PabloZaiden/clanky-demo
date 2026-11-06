import espresso from "./assets/espresso.svg";
import flatWhite from "./assets/flat-white.svg";
import coldBrew from "./assets/cold-brew.svg";

const drinks = [
  { name: "Espresso", description: "Small cup. Bold beginning.", price: 3, image: espresso },
  { name: "Flat white", description: "Silky milk meets a rich double shot.", price: 4.5, image: flatWhite },
  { name: "Cold brew", description: "Slow-steeped and ready to chill.", price: 4, image: coldBrew },
];

const menu = document.getElementById("menu-list");
const count = document.getElementById("menu-count");
if (!menu || !count) {
  throw new Error("The menu list and count are missing from the page.");
}

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

for (const drink of drinks) {
  const card = document.createElement("article");
  card.className = "menu-card";

  const image = document.createElement("img");
  image.src = drink.image;
  image.alt = `Illustration of ${drink.name.toLowerCase()}`;
  image.width = 360;
  image.height = 240;

  const heading = document.createElement("div");
  heading.className = "menu-card-heading";
  const title = document.createElement("h3");
  title.textContent = drink.name;
  const price = document.createElement("span");
  price.className = "menu-price";
  price.textContent = currency.format(drink.price);
  heading.append(title, price);

  const description = document.createElement("p");
  description.textContent = drink.description;
  card.append(image, heading, description);
  menu.append(card);
}

count.textContent = `${drinks.length} good reasons to stop by`;
