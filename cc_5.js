// Task 1: Customer Profile

// Creating the customer object with properties
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

// Logging each property using template literals
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Task 2: Order Details

// Creating the order object with properties and a method
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    
    // Method to display order details
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};

// Calling the method to log order details
order.displayOrder();

// Task 3: Shopping Cart

// Creating an array to represent items in the cart
let cartItems = ["Laptop", "Headphones", "Smartphone"];

// Adding a new product to the cart using .push()
cartItems.push("Tablet");

// Removing the last item using .pop()
cartItems.pop();

// Adding an item at the beginning using .unshift()
cartItems.unshift("Smartwatch");

// Removing the first item using .shift()
cartItems.shift();

// Logging the final cartItems array
console.log(cartItems);

// Task 4: Price Adjustments

// Declaring an array of product prices
const prices = [100, 200, 300];

// Using the .map() method to apply a 10% discount to each price
const discountedPrices = prices.map(price => price * 0.9);

// Logging the discounted prices
console.log(discountedPrices);

// Task 5: Product Availability

// Declaring an array with product quantities
const inventory = [5, 0, 12, 8, 0];

// Using the .filter() method to remove products with zero stock
const availableProducts = inventory.filter(quantity => quantity > 0);

// Logging the filtered array of products with stock
console.log(availableProducts);

// Task 6: Revenue Calculation

// Declaring an array of sales amounts
const sales = [500, 300, 200, 400];

// Using the .reduce() method to calculate the total revenue
const totalRevenue = sales.reduce((total, sale) => total + sale, 0);

// Logging the total revenue
console.log(totalRevenue);

// Task 7: Customer Search

// Declaring an array of customer names
const customers = ["Alice", "Bob", "Charlie", "David"];

// Using the .find() method to locate the customer "Charlie"
const foundCustomer = customers.find(customer => customer === "Charlie");

// Logging the result
console.log(foundCustomer);

// Task 8: Tax Calculation

// Function to calculate tax
function calculateTax(amount, taxRate) {
    const tax = amount * taxRate;
    console.log(`The tax for $${amount} at a rate of ${taxRate * 100}% is $${tax}.`);
}

// Calling the function with a sample amount and tax rate
calculateTax(200, 0.1);  // 10% tax

// Task 9: Discount Application

// Function expression to apply a discount
const applyDiscount = function(price, discount) {
    const discountedPrice = price - (price * discount);
    console.log(`The price after a ${discount * 100}% discount is $${discountedPrice}.`);
};

// Calling the function with a sample price and discount
applyDiscount(150, 0.2);  // 20% discount
