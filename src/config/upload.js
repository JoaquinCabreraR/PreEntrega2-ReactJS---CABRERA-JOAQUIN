import products from "../AsyncMock.json" assert{type: 'json'};

products.forEach ((el) => delete el.id);
console.log(products);
