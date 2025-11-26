const toggle = document.getElementById("social-toggle");
const menu = document.getElementById("dropdown-menu");

toggle.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  } else {
    menu.style.display = "flex";
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.opacity = 1;
    }, 10);
  }
});

// Toggle contact menu
const contactToggle = document.getElementById("contact-toggle");
const contactMenu = document.getElementById("contact-menu");

contactToggle.addEventListener("click", () => {
  if (contactMenu.style.display === "flex") {
    contactMenu.style.opacity = 0;
    setTimeout(() => {
      contactMenu.style.display = "none";
    }, 300);
  } else {
    contactMenu.style.display = "flex";
    contactMenu.style.opacity = 0;
    setTimeout(() => {
      contactMenu.style.opacity = 1;
    }, 10);
  }
});

// Copy email on click
document.getElementById("copy-email").addEventListener("click", () => {
  const email = "k2thompson@yahoo.com"; // <-- swap this for your actual email
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy email:", err);
    });
});
