//Task 2: Fetch Products .then()
function fetchProductsThen() { //creating function to fetch products
    fetch("https://www.course-api.com/javascript-store-products") //sourcing product data from this URL
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(product => {
            console.log(product.fields.name); //logging product names
        });
    })
    .catch(error => {
        console.error("Fetch error:", error); //logging error if fetch fails
    });
}

//Task 3: : Fetch Products with async/await
async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      // Call helper function to display products on the page
      displayProducts(products);
    } catch (error) {
      // If an error occurs, handle it with the provided helper
      handleError(error);
    }
  }

  //Task 4: Display the Products
  function displayProducts(products) {
    // Select the container element where products will be displayed
    const container = document.querySelector('#product-container');
  
    // Optionally clear any previous content
    container.innerHTML = '';
  
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
      // Create a wrapper element for each product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      // Create an image element for the product's image
      const img = document.createElement('img');
      // Assuming product.fields.image is an array, use the first image
      img.src = product.fields.image && product.fields.image[0] ? product.fields.image[0].url : '';
      img.alt = product.fields.name;
  
      // Create an element to display the product's name
      const nameEl = document.createElement('h4');
      nameEl.textContent = product.fields.name;
  
      // Create an element to display the product's price
      const priceEl = document.createElement('p');
      // Optionally format the price (assuming price is stored as a number)
      priceEl.textContent = `Price: $${product.fields.price}`;
  
      // Append the image, name, and price elements to the product container
      productDiv.appendChild(img);
      productDiv.appendChild(nameEl);
      productDiv.appendChild(priceEl);
  
      // Append the product container to the main container
      container.appendChild(productDiv);
    });
  } 

  //Task 5: Reusable Error Handler 
  function handleError(error) { //creating function to handle errors
    console.error(`An error occurred: ${error.message}`);
  }

  //Task 6: Call you fetch functions 
fetchProductsThen();
fetchProductsAsync();