import axios from 'axios';

class ProductsService {
	constructor() {
		//this._allProducts = [];
		//this._products = this._allProducts;
		this._filters = [];
	}

	getProducts(){
		return axios.get('https://api.mlab.com/api/1/databases/fashiondb/collections/public?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR')
			.then((res) => {
				this._allProducts = res.data.map(i => {
					i.id = i._id.$oid;
					delete i._id;
					return i;
				});
				this._products = this._allProducts;
				return this._allProducts;
			})
			/*.catch((error) => {
				console.log(error);
			});*/
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
				product.metadata[filter.name].toString().search(filter.value) !== -1));
	}

	get avgCost() {
		if (!this._products) return 0;
		let avgCost = 0;
		this._products.forEach((item) => {
			avgCost += item.metadata.price;
		});
		avgCost = this._products.length && avgCost / this._products.length;
		return avgCost.toFixed(2);
	}

	get count() {
		return this._products ? this._products.length : 0;
	}

	get products() {
		return this._products;
	}
}

export default new ProductsService();