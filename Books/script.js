const searchInput = document.querySelector(".search-input");
const books = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  books.forEach(book => {
    const title = book.querySelector(".book-title").innerText.toLowerCase();
    const author = book.querySelector(".book-author").innerText.toLowerCase();

    if (title.includes(value) || author.includes(value)) {
      book.style.display = "flex";
    } else {
      book.style.display = "none";
    }
  });
});
// Variable to track if the logo has been clicked once
let logoClickedOnce = false;

document.addEventListener("DOMContentLoaded", () => {
    const logoLink = document.getElementById("home");
    const hiddenMessage = document.getElementById("hiddenMessage");

    if (logoLink && hiddenMessage) {
        logoLink.addEventListener("click", (event) => {
            if (!logoClickedOnce) {
                // Prevent the actual link redirection on the first click
                event.preventDefault(); 
                
                // Show the hidden message
                hiddenMessage.style.display = "block";
                setTimeout(() => {
                    hiddenMessage.style.opacity = "1";
                }, 10); // small timeout to allow display:block to register for transition

                logoClickedOnce = true;
            } else {
                // On the second click, allow the default link behavior (redirect to index.html)
                return true;
            }
        });
    }
});