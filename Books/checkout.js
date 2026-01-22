let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  const itemsDiv = document.getElementById("items");

cart.forEach(item => {
    total += item.price;
    itemsDiv.innerHTML += `<p>${item.title} - ₹${item.price}</p>`;
});

document.getElementById("total").innerText = total;

function pay(){
    alert("Payment successful (demo)");
    localStorage.removeItem("cart");   
    window.location.href = "index.html";
}