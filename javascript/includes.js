// includes.js
function includeHTML(id, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

includeHTML("navbar", "/My-Portfolio/html/page-includes/navbar.html");
includeHTML("footer", "/My-Portfolio/html/page-includes/footer.html");
