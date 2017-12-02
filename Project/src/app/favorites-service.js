import axios from 'axios';

import productsService from './products-service';

class FavoritesService {
	constructor() {
		//this._allProducts = [];
		//this._products = this._allProducts;
		this._filters = [];
	}

	getFavorites() {
		return axios.get('https://api.mlab.com/api/1/databases/fashiondb/collections/favorites?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR')
			.then(res => {
				this.ids = res.data;
				this._favorites = productsService.products.filter(i => res.data.some(j => j.id === i.id));
				return this._favorites;
				/*.map(i => ({...i, id: res.data.find(j => j.id === i.id)._id.$oid}));*/
			})
		/*return productsService.allProducts
			.then(products => {
				console.log(products);
				return axios.get('https://api.mlab.com/api/1/databases/fashiondb/collections/favorites?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR');
			})
			.then(favorites => {
				this._allFavorites = favorites.data;
				this._favorites = productsService.products.filter(i => favorites.data.some(j => j.id === i._id.$oid));
				console.log(this._favorites);
				return this._favorites;
			});*/
	}

	isFavorite(id) {
		return this._favorites && this._favorites.some(i => i.id === id);
	}

	markAsFavorite(id) {
		if (this.isFavorite(id)) {
			let ID = this.ids.find(i => i.id === id)._id.$oid;
			return axios.delete(`https://api.mlab.com/api/1/databases/fashiondb/collections/favorites/${ID}?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR`)
				.then((res) => {
					this._favorites.splice(this._favorites.indexOf(this._favorites.find(i => i.id === id)), 1);
					this.ids.splice(this.ids.indexOf(this.ids.find(i => i.id === id)), 1);
				});
		} else {
			return axios.post('https://api.mlab.com/api/1/databases/fashiondb/collections/favorites?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR', {id: id})
				.then((res) => {
					this.ids.push(res);
					this._favorites.push(productsService.products.find(i => i.id === id));
				});
		}
	}

	/*_filterProducts() {
		this._products = this._allProducts.filter(product =>
			this._filters.every(filter =>
				product.metadata[filter.name].toString().search(filter.value) !== -1));
	}*/

	get avgCost() {
		if (!this._favorites) return 0;
		let avgCost = 0;
		this._favorites.forEach((item) => {
			avgCost += item.metadata.price;
		});
		avgCost = this._favorites.length && avgCost / this._favorites.length;
		return avgCost.toFixed(2);
	}

	get count() {
		return this._favorites ? this._favorites.length : 0;
	}

	get favorites() {
		return this._favorites;
	}
}

export default new FavoritesService();