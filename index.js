var _ = require('lodash');
var fs = require('fs')
var products = require('./data/products.json');
const { filter } = require('lodash');

const productsFilter = products.filter(product => product.price > 150);

fs.writeFile('./data/prod150.json', JSON.stringify(_.shuffle(productsFilter)), () => {
    console.log(productsFilter);
})