function showProducts(category) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  
  productsData[category].forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = product.name;
    listItem.onclick = function() {
      selectedProduct = product;
      showProductInfo(product);
    };
    productList.appendChild(listItem);
  });
  
    document.getElementById('productInfo').style.display = 'none';
}

function showProductInfo(product) {
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productInfo').style.display = 'block';
}

function showOrderForm() {
  document.getElementById('orderForm').style.display = 'block';
}

function submitOrder(event) {
  event.preventDefault();
  
  const buyerName = document.getElementById('buyerName').value;
  const city = document.getElementById('city').value;
  const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;
  const quantity = document.getElementById('quantity').value;
  const comment = document.getElementById('comment').value;
  
  if (buyerName === '' || city === '' || quantity === '') {
    alert('Please fill in all mandatory fields.');
    return;
  }
  
  const orderDetails = `Product: ${selectedProduct.name}\nDescription: ${selectedProduct.description}\nPrice: ${selectedProduct.price}\n\nBuyer: ${buyerName}\nCity: ${city}\nDelivery Method: ${deliveryMethod}\nQuantity: ${quantity}\nComment: ${comment}`;
  document.getElementById('orderDetails').textContent = orderDetails;
  document.getElementById('orderForm').style.display = 'none';
  document.getElementById('orderConfirmation').style.display = 'block';
}