function updateTotals() {
    const items = document.querySelectorAll('.item-card');
    let total = 0;

    items.forEach(item => {
        // Pull the price from the data attribute we added in HTML
        const price = parseFloat(item.getAttribute('data-price'));
        total += price;
    });

    // Update the UI
    document.getElementById('item-count').innerText = items.length;
    document.getElementById('subtotal').innerText = `$${total.toFixed(2)}`;
    document.getElementById('total-amount').innerText = `$${total.toFixed(2)}`;

    // If cart is empty, show a message
    if (items.length === 0) {
        document.getElementById('cart-items').innerHTML = '<p style="color: #b3b3b3; font-style: italic;">Your list is currently empty.</p>';
    }
}

function removeItem(button) {
    // Find the parent card of the button clicked
    const card = button.closest('.item-card');
    
    // Add a simple fade-out effect before removing
    card.style.opacity = '0';
    card.style.transform = 'translateX(20px)';
    card.style.transition = '0.3s ease';

    setTimeout(() => {
        card.remove();
        updateTotals();
    }, 300);
}