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
