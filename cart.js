 //add to cart 

 // Define variable for the cart items
 const cart = [];

 function showProductDetails(productId) {
    const overlay = document.getElementById('product-overlay');
    overlay.style.display = 'block';

    const productDetails = overlay.querySelector('.product-details');
    const buyButton = document.querySelector(`[data-product-id="${productId}"]`);

    const productName = buyButton.getAttribute('data-product-name');
    const productDescription = buyButton.getAttribute('data-product-description');
    const productPrice = buyButton.getAttribute('data-product-price');
    const iframeURL = buyButton.getAttribute('data-iframe-url');
    const productImageURL = buyButton.getAttribute('data-product-image');

    productDetails.innerHTML = `
        <span class="close-button" onclick="closeProductDetails()">&times;</span>
        <h5>${productName}</h5>
        ${
            iframeURL ? `<iframe src="${iframeURL}" frameborder="0" width="100%" height="540px"></iframe>` :
            productImageURL ? `<img src="${productImageURL}" alt="Product Image">` : ''
        }
        <p>${productDescription}</p>
        <p>Price: $${productPrice}</p>
        <label for="quantity">Select Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" value="1">
        <button type="button" class="btn btn-primary" onclick="addToCart(${productId}, '${productName}', ${productPrice}, '${productImageURL}')">Add to Cart</button>
    `;
}



  function delayedShowProductDetails(productId) {
    setTimeout(() => {
       showProductDetails(productId);
    }, 1000); 
 }
 
 
 
 
 function displayCart(cart, totalPrice) {
     
     if (cart.length === 0) {
         
     } else {
         for (const item of cart) {
             const itemTotal = item.price * item.quantity;
             
         }
       
         
     }
 
    
 }
 
 function closeProductDetails() {
     const overlay = document.getElementById('product-overlay');
     overlay.style.display = 'none';
 }
 
 function closeCart() {
     const cartOverlay = document.getElementById('cart-overlay');
     cartOverlay.style.display = 'none';
 }
 
 function showAddedToCartDetails(productName, productImageURL) {
    const addedOverlay = document.getElementById('added-to-cart-overlay');
    addedOverlay.style.display = 'block';

    const addedMessage = addedOverlay.querySelector('#added-message');
    addedMessage.textContent = `Added: ${productName}`;

    const addedProductImage = addedOverlay.querySelector('#added-product-image');
    addedProductImage.src = productImageURL;
}



function closeAddedToCartDetails() {
    const addedToCartOverlay = document.getElementById('added-to-cart-overlay');
    addedToCartOverlay.style.display = 'none';
}


  
  function showAddedToCartDetails(productName, productImageURL) {
    const addedOverlay = document.getElementById('added-to-cart-overlay');
    addedOverlay.style.display = 'block';
  
    const addedMessage = addedOverlay.querySelector('#added-message');
    addedMessage.textContent = `Added: ${productName}`;
  
    const addedProductImage = addedOverlay.querySelector('#added-product-image');
    addedProductImage.src = productImageURL;
  }
  
  function addToCart(productId, productName, productPrice, productImageURL) {
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    // Add the item to the cart
    const item = {
      productId: productId,
      name: productName,
      price: productPrice,
      quantity: quantity,
      image: productImageURL, // Include the product image URL
    };
    cart.push(item);

    // Calculate the total price
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }

    // Display the cart contents and total price
    displayCart(cart, totalPrice);

    // Show the "Added to Cart" overlay
    showAddedToCartDetails(productName, productImageURL);
}


function continueShopping() {
   
    closeProductDetails();
    
    closeAddedToCartDetails();
   
}

function proceedToCheckout() {
    
    closeProductDetails();
    closeAddedToCartDetails();
    
}
function displayCheckoutSummary(cart) {
    const checkoutSummaryOverlay = document.getElementById('checkout-summary-overlay');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        for (const item of cart) {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = item.image;
            productImage.alt = 'Product Image';
            productImage.style.width = '80px'; // Adjust the width as needed
            productImage.style.height = '80px'; // Adjust the height as needed

            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

            const productName = document.createElement('p');
            productName.textContent = item.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${item.price} - Quantity: ${item.quantity} - Total: $${itemTotal}`;

            productInfo.appendChild(productName);
            productInfo.appendChild(productPrice);

            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            cartItems.appendChild(productItem);
        }
    }

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    checkoutSummaryOverlay.style.display = 'block';
}



function proceedToCheckout() {
    closeProductDetails();
    closeAddedToCartDetails();
    displayCheckoutSummary(cart);
}

function proceedToPayment() {
    // You can add the logic to proceed to the actual payment page here.
    // For example, you can redirect the user to a payment page or show a payment form.
    // Once the payment is successful, you can clear the cart.
    
    cart.length = 0; // Clear the cart array
    closeCheckoutSummary(); // Close the checkout summary overlay
}

function continueShoppingWithoutClearingCart() {
    closeCheckoutSummary();
    hideEmptyCartMessage();
}
function hideEmptyCartMessage() {
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    cartEmptyMessage.style.display = 'none';
}
function closeCheckoutSummary() {
    const checkoutSummaryOverlay = document.getElementById('checkout-summary-overlay');
    checkoutSummaryOverlay.style.display = 'none';
}

function clearCart() {
    cart.length = 0; // Clear the cart
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = 'Total Price: $0.00'; // Set the total price to 0
    displayEmptyCartMessage();
    displayCart(cart, 0); // Update the cart display
    displayEmptyCartMessage();
}


function displayEmptyCartMessage() {
    const cartEmptyMessage = document.getElementById('cart-empty-message');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
    } else {
        cartEmptyMessage.style.display = 'none';
    }
}

// Function to open the checkout summary
function openCheckoutSummary() {
    // Add your code to open the checkout summary here
    // You can use the same overlay approach as before
    // to display the checkout summary.
    // Make sure to update the cart information accordingly.
}

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the cart icon to open the checkout summary
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', openCheckoutSummary);
});

function openCheckoutSummary() {
    // Show the checkout summary overlay (you may have a function to do this)
    displayCheckoutSummary(cart); // Replace 'cart' with your cart data
}
