import axios from 'axios';

class GoodsService {

	constructor() {
		this._goods = [];
		this._filteredGoods = this._goods;
		this._filters = [];
	}

	getProducts() {
		return axios.get('https://api.mlab.com/api/1/databases/fashiondb/collections/public?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR')
			.then((res) => {
				this._goods = res.data.map(i => {
					return {
						id: i._id.$oid,
						favoriteId: null,
						title: i.metadata.title,
						price: i.metadata.price,
						currency: i.metadata.currency,
						imageUrl: i.image.url,
						retailer: i.metadata.retailer,
						brand: i.metadata.brand,
						dateCreated: i.dateCreated
					};
				});
				this._filteredGoods = this._goods;
				return this._filteredGoods;
			})
		/*.catch((error) => {
			console.log(error);
		});*/
	}

	getFavorites() {
		return axios.get('https://api.mlab.com/api/1/databases/fashiondb/collections/favorites?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR')
			.then(res => {
				this._goods.map(i => {
					let tmp = res.data.find(j => j.id === i.id);
					i.favoriteId = tmp ? tmp._id.$oid : null;
					return i;
				});
				return this._goods;
			})
	}

	isFavorite(id) {
		return this && this._goods && !!this._goods.find(i => i.id === id).favoriteId;
	}

	markAsFavorite(id) {
		let good = this._goods.find(i => i.id === id);
		if (this.isFavorite(id)) {
			return axios.delete(`https://api.mlab.com/api/1/databases/fashiondb/collections/favorites/${good.favoriteId}?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR`)
				.then((res) => {
					good.favoriteId = null;
				});
		} else {
			return axios.post('https://api.mlab.com/api/1/databases/fashiondb/collections/favorites?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR', {id: id})
				.then((res) => {
					good.favoriteId = res.data._id.$oid;
				});
		}
	}

	setFilter(name, value) {
		let regExp = new RegExp(`${value}`, 'i');
		if (this._filters.some(i => i.name === name)) {
			this._filters.find(i => i.name === name).value = regExp;
		} else {
			this._filters.push({name: name, value: regExp});
		}
		this._filterGoods();
	}

	_filterGoods() {
		this._filteredGoods = this._goods.filter(good =>
			this._filters.every(filter =>
				good[filter.name].toString().search(filter.value) !== -1));
	}

	get avgCost() {
		if (!this._filteredGoods) return 0;
		let avgCost = 0;
		this._filteredGoods.forEach(item => {
			avgCost += item.price;
		});
		avgCost = this._filteredGoods.length && avgCost / this._filteredGoods.length;
		return avgCost.toFixed(2);
	}

	get count() {
		return this._filteredGoods ? this._filteredGoods.length : 0;
	}

	get avgCostFavorites() {
		if (!this.favorites) return 0;
		let avgCost = 0;
		this.favorites.forEach(item => {
			avgCost += item.price;
		});
		avgCost = this.favorites.length && avgCost / this.favorites.length;
		return avgCost.toFixed(2);
	}

	get countFavorites() {
		return this.favorites ? this.favorites.length : 0;
	}

	/*get goods() {
		return this._goods;
	}*/

	get favorites() {
		return this._filteredGoods.filter(i => this.isFavorite(i.id));
	}

	get filteredGoods() {
		return this._filteredGoods;
	}
}

export const goodsService = new GoodsService();