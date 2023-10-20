document.addEventListener("DOMContentLoaded", () => {
  const curtain = document.getElementById("curtain");
  const title = document.getElementById("title");
  const menu = document.getElementById("menu");

  setTimeout(() => {
    curtain.classList.add("open");
    setTimeout(() => {
      title.style.opacity = 1;
      setTimeout(() => {
        menu.style.display = "block";
      }, 2000); // Menü nach 2 Sekunden anzeigen
    }, 1000);
  }, 2000); // Vorhang-Animation dauert 2 Sekunden
});
