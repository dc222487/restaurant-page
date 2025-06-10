export default function loadContact() {
  const content = document.getElementById("content");
  const contact = document.createElement("div");
  contact.style.padding = "3rem 2rem";
  contact.innerHTML = `
    <h1 style="text-align:center; color:#3d405b;">Contact Us</h1>
    <p style="max-width:600px; margin:1rem auto; font-size:1.2rem; text-align:center;">
      Call us: <strong>(123) 456-7890</strong><br/>
      Email: <strong>info@labellecuisine.com</strong><br/>
      Address: <strong>123 Fancy St, Foodie City</strong>
    </p>
    <form style="max-width:600px; margin:2rem auto; display:flex; flex-direction:column; gap:1rem;">
      <input type="text" placeholder="Your Name" style="padding: 0.8rem; font-size: 1rem;">
      <input type="email" placeholder="Your Email" style="padding: 0.8rem; font-size: 1rem;">
      <textarea placeholder="Your Message" rows="4" style="padding: 0.8rem; font-size: 1rem;"></textarea>
      <button style="padding: 0.8rem; font-size: 1rem; background-color: #e07a5f; color: white; border: none; border-radius: 5px;">Send</button>
    </form>
  `;
  content.appendChild(contact);
}
