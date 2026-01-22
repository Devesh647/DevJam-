let cart = JSON.parse(localStorage.getItem("cart")) || [
  {id:1, title:"The Alchemist", price:199, img:"https://covers.openlibrary.org/b/id/8231856-L.jpg"},
  {id:2, title:"Atomic Habits", price:249, img:"https://covers.openlibrary.org/b/id/10594774-L.jpg"}
];

function renderCart(){
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div class="item-info">
          <h3>${item.title}</h3>
          <p class="price">₹${item.price}</p>
        </div>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(index){
  cart.splice(index,1);
  renderCart();
}

function checkout(){
  alert("Checkout successful");
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

renderCart();
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    
    let cart = JSON.parse(localStorage.getItem('bookflixCart')) || [];
    let total = 0;

    cartItemsContainer.innerHTML = '';

    cart.forEach((book, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item'; 
        itemDiv.innerHTML = `
            <img src="${book.img}" style="width: 80px; margin-right: 20px;">
            <div class="item-info">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
            <div class="item-price">${book.price}</div>
            <button onclick="removeItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">✕</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        const priceValue = parseFloat(book.price.replace(/[^0-9.-]+/g,""));
        total += priceValue;
    });

    totalDisplay.innerText = total.toFixed(2);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('bookflixCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('bookflixCart', JSON.stringify(cart));
    displayCart();
}
window.onload = displayCart;