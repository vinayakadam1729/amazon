const shopCategories = [
  { title: "Shop deals in Fashion", imageName: "box1_image.jpg" },
  { title: "Health & Personal care", imageName: "box2_image.jpg" },
  { title: "Lifestyle", imageName: "box3_image.jpg" },
  { title: "Smartphones & Gadgets", imageName: "box4_image.jpg" },
  { title: "Makeup accessories", imageName: "box5_image.jpg" },
  { title: "Petcare", imageName: "box6_image.jpg" },
  { title: "New arrival & toys", imageName: "box7_image.jpg" },
  { title: "Discover new Trends", imageName: "box8_image.jpg" },
];

const imageShelves = [
  {
    title: "Popular items this season",
    images: Array.from({ length: 8 }, (_, index) => `${index + 1}.jpg`),
  },
  {
    title: "Best Sellers in Sports & Outdoors",
    images: Array.from({ length: 8 }, (_, index) => `${index + 9}.jpg`),
  },
];

function createBackgroundImage(className, imageName) {
  const image = document.createElement("div");
  image.className = className;
  image.style.backgroundImage = `url("./images/${imageName}")`;
  return image;
}

function createShopCard({ title, imageName }) {
  const card = document.createElement("div");
  const content = document.createElement("div");
  const heading = document.createElement("h2");
  const linkContainer = document.createElement("p");
  const link = document.createElement("a");

  card.className = "boxes";
  content.className = "box-content";
  heading.textContent = title;
  link.className = "link-primary";
  link.href = "#";
  link.textContent = "See more";

  linkContainer.append(link);
  content.append(
    heading,
    createBackgroundImage("box-img", imageName),
    linkContainer,
  );
  card.append(content);
  return card;
}

function createImageShelf({ title, images }) {
  const shelf = document.createElement("div");
  const heading = document.createElement("h2");
  const content = document.createElement("div");

  shelf.className = "full-boxes";
  heading.textContent = title;
  content.className = "full-boxes-content";
  content.append(
    ...images.map((imageName) =>
      createBackgroundImage("full-boxes-img", imageName),
    ),
  );
  shelf.append(heading, content);
  return shelf;
}

document
  .getElementById("shop-content")
  .append(...shopCategories.map(createShopCard));
document
  .getElementById("image-shelves")
  .append(...imageShelves.map(createImageShelf));

document.getElementById("scroll-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
