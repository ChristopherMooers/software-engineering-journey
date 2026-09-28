const itemName = 'Coffee';
const itemPrice = 5.5;
const quantity = 4; 
const taxRate = 0.08;
const subtotal = itemPrice * quantity;
const totalTax = subtotal * taxRate;
const total = subtotal + totalTax;


console.log('---Receipt---');
console.log(`Item: ${itemName}`);
console.log(`Price: $${itemPrice.toFixed(2)}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Tax Rate: ${taxRate * 100}%`);
console.log(`Tax: $${totalTax.toFixed(2)}`);
console.log(`Total: $${total.toFixed(2)}`);