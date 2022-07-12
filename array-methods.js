const products = [
    { name: 'laptop', price: 8000, brand: 'Lenovo', color: 'silver' },
    { name: 'phone', price: 6000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'apple', color: 'yellow' },
    { name: 'sunglass', price: 800, brand: 'raybon', color: 'black' }
];

// ekhane map loop throw kore return koreche
const brands = products.map(product => product.brand);
console.log(brands);

// forEach return kore na tai kono variable e rakhte hoy na
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.name));

// filter
// filter condition fulfill korle return kore ekta array
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('p'));
console.log(specificName);

// find
// find shudhu prothom ta k dibe
const special = products.find(product => product.name.includes('p'));
console.log(special);