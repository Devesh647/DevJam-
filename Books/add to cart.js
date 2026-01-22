function addToCartFromCard(button) {
    const card = button.closest('.book-card');

    const bookData = {
        title: card.querySelector('.book-title').innerText,
        author: card.querySelector('.book-author').innerText,
        price: button.getAttribute('data-price'), 
        img: card.querySelector('.row_poster').src
    };

    let cart = JSON.parse(localStorage.getItem('bookflixCart')) || [];
    cart.push(bookData);
    localStorage.setItem('bookflixCart', JSON.stringify(cart));
    window.location.href = "cart.html";
}