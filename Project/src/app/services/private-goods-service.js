import axios from 'axios';

class PrivateGoodsService {

	constructor() {
		this._goods = [];
		this._filteredGoods = this._goods;
		this._filters = [];
	}

	getProducts() {
		return axios.get('https://api.mlab.com/api/1/databases/fashiondb/collections/private?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR')
			.then((res) => {
				this._goods = res.data.map(i => {
					return {
						id: i._id.$oid,
						favoriteId: null,
						title: i.title,
						price: i.price,
						currency: i.currency,
						imageUrl: i.imageUrl,
						retailer: i.retailer,
						brand: i.brand,
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

	isFavorite(id) {
		return this && this._goods && !!this._goods.find(i => i.id === id).favoriteId;
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

	/*get goods() {
		return this._goods;
	}*/

	get filteredGoods() {
		return this._filteredGoods;
	}
}

export const privateGoodsService = new PrivateGoodsService();