// function includeHTML(id, filePath) {
//   fetch(filePath)
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById(id).innerHTML = data;
//     });
// }

// // Call the function to include the navbar and footer
// includeHTML("navbar", "html/page-includes/navbar.html");
// includeHTML("footer", "html/page-includes/footer.html");

// includes.js
function includeHTML(id, filePath) {
  let basePath = window.location.pathname.includes("html/") ? "../" : "./";
  fetch(basePath + filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// Call the function to include the navbar and footer
includeHTML("navbar", "html/page-includes/navbar.html");
includeHTML("footer", "html/page-includes/footer.html");
