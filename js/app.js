// Dummy shopping cart for demonstration
let cart = [];

// Add product to cart
document.getElementById('add-to-cart')?.addEventListener('click', function() {
  alert('Product added to cart!');
  // Add logic to update the cart
  cart.push({ name: 'Product 1', price: 19.99 });
});

// Remove product from cart
document.querySelectorAll('.remove').forEach(button => {
  button.addEventListener('click', function() {
    alert('Product removed from cart!');
    // Logic to remove the product from the cart
  });
});
