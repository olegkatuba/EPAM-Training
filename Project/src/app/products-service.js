/*
//key_M2IwMDMwZmZjZTMwZDg4OTk1NGQyMDgzZDEzNzc4
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.threadgenius.co/v1/catalog/catalog_4163ec6d6cc2cc6819e72efc6e3d38/object', true);
//xhr.setRequestHeader ('Authorization', 'Basic ' + btoa('key_M2IwMDMwZmZjZTMwZDg4OTk1NGQyMDgzZDEzNzc4:'));
//xhr.setRequestHeader ('Content-Type', 'application/json');
xhr.onload = function () {
	console.log(this.responseText);
};
xhr.onerror = () => {
	console.log(xhr.status + ': ' + xhr.statusText);
};
console.log("\nSended on " + 'https://api.threadgenius.com/v1/catalog');
xhr.send();*/

import items from './response-data-export.json';

class ProductsService {
	constructor() {
		this._allProducts = items.response.results;
		this._products = this._allProducts;
		this._filters = [];
	}

	setFilter(name, value) {
		let regExp = new RegExp(`${value}`, 'i');
		if (this._filters.some(i => i.name === name)) {
			this._filters.find(i => i.name === name).value = regExp;
		} else {
			this._filters.push({name: name, value: regExp});
		}
		this._filterProducts();
	}

	_filterProducts() {
		this._products = this._allProducts.filter(product =>
			this._filters.every(filter =>
				product.object.metadata[filter.name].toString().search(filter.value) !== -1));
	}

	getAvgCost() {
		let avgCost = 0;
		this._products.forEach((item) => {
			avgCost += item.object.metadata.price;
		});
		avgCost = this._products.length && avgCost / this._products.length;
		return avgCost.toFixed(2);
	}

	getCount() {
		return this._products.length;
	}

	getProducts() {
		return this._products;
	}
}

export default new ProductsService();