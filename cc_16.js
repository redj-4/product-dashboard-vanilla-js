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

