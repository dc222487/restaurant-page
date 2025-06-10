export default function loadMenu() {
  const content = document.getElementById("content");
  const menu = document.createElement("div");
  menu.style.padding = "3rem 2rem";
  menu.innerHTML = `
    <h1 style="text-align:center; color:#3d405b;">Our Menu</h1>
    <ul style="max-width: 600px; margin: 2rem auto; font-size: 1.2rem; list-style: none; padding: 0;">
      <li><strong>Grilled Salmon</strong> - $24.99</li>
      <li><strong>Truffle Pasta</strong> - $19.99</li>
      <li><strong>Roasted Duck</strong> - $29.99</li>
      <li><strong>Chocolate Lava Cake</strong> - $8.99</li>
    </ul>
  `;
  content.appendChild(menu);
}
