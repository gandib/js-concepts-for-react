const products = [
    { name: 'laptop', price: 8000, brand: 'Lenovo', color: 'silver' },
    { name: 'phone', price: 6000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'apple', color: 'yellow' },
    { name: 'sunglass', price: 800, brand: 'raybon', color: 'black' }
];
// keys, values
const keys = Object.keys(products);
const values = Object.values(products);


const newProduct = { name: 'pen', price: 1800, brand: 'apple', color: 'black' };
// copy products array and then add newProduct
// (...) k spread operator bole
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without a specefic item
// remove watch means create a new array without the watch
const remaining = products.filter(product => product.name !== 'watch');
console.log(remaining);