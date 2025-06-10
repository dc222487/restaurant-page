export default function loadHome() {
  const content = document.getElementById("content");
  const home = document.createElement("div");
  home.style.textAlign = "center";
  home.style.padding = "3rem 2rem";

  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5";
  image.alt = "Gourmet Dish from La Belle Cuisine";
  image.style.maxWidth = "100%";
  image.style.borderRadius = "10px";
  image.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to La Belle Cuisine";
  heading.style.fontSize = "3rem";
  heading.style.marginTop = "2rem";
  heading.style.color = "#3d405b";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Discover the heart of fine dining in the city. At La Belle Cuisine, we combine
    elegance with flavor to bring you unforgettable meals crafted with love, fresh ingredients, and
    world-class culinary artistry. Whether it’s a romantic evening or a special celebration, our
    dishes will awaken your senses.`;
  paragraph.style.fontSize = "1.25rem";
  paragraph.style.maxWidth = "800px";
  paragraph.style.margin = "1.5rem auto 0";
  paragraph.style.lineHeight = "1.6";

  home.appendChild(image);
  home.appendChild(heading);
  home.appendChild(paragraph);
  content.appendChild(home);
}
