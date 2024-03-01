// script.js

// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reservation form submission
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // You can add your form submission logic here
    
    // For demonstration, we'll just log the form data to the console
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    console.log('Form Data:', formDataObject);
});

// Subscribe form submission
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // You can add your form submission logic here
    
    // For demonstration, we'll just log the email to the console
    const email = this.querySelector('input[type="email"]').value;
    console.log('Subscribed email:', email);
});
function openPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "block";
}

function closePopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "none";
}

/* cart js */
function changeQuantity(action, itemId) {
    let quantityInput = document.getElementById(itemId);
    let currentQuantity = parseInt(quantityInput.value);
    if (action === 'increase') {
        currentQuantity++;
    } else if (action === 'decrease' && currentQuantity > 1) {
        currentQuantity--;
    }
    quantityInput.value = currentQuantity;
    // Update the total price here based on cart contents and quantity
    updateTotalPrice();
}

function updateTotalPrice() {
    // Assume each item is $19.99 for simplicity, replace with actual logic
    let totalPrice = 19.99 * parseInt(document.getElementById('item1').value);
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
}

// Add functionality to remove button if needed