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
