// spinner.js
document.getElementById("profileImage").addEventListener("click", function () {
  this.style.animation = "spin 3s linear";

  // Poista animaatio, jotta se voidaan aktivoida uudelleen.
  this.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});
