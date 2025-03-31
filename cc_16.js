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