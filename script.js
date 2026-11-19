/*
  ADÉ STUDIOS website settings.
  Add the official WhatsApp number below in international format, digits only.
  Nigeria example: 2348012345678 (do not include +, spaces or leading 0).
*/
const WHATSAPP_NUMBER = "2349050061870"; // ADÉ STUDIOS official WhatsApp Business number
const WHATSAPP_MESSAGE = "Hello ADÉ STUDIOS, I would like to enquire about your digital solutions.";

const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "#contact";

["whatsappCta", "whatsappFloat"].forEach((id) => {
  const link = document.getElementById(id);
  if (link) {
    link.href = whatsappUrl;
    if (!WHATSAPP_NUMBER) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("WhatsApp is not configured yet. Please add the official business number in script.js.");
      });
    }
  }
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
