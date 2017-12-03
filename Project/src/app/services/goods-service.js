import axios from 'axios';

class GoodsService {

	constructor() {
		this._goods = [];
		this._filteredGoods = this._goods;
		this._filters = [];
	}

	getProducts(catalog) {
		return axios.get(`https://api.mlab.com/api/1/databases/fashiondb/collections/${catalog}?apiKey=9wv4lmwI0c6HNTcPx6jtivrA2SDb7ADR`)
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

	clearFilter(){
		this._filters = [];
		this._filterGoods();
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

	avgCost(items) {
		if (!items) return 0;
		let avgCost = 0;
		items.forEach(item => {
			avgCost += item.price;
		});
		avgCost = items.length && avgCost / items.length;
		return avgCost.toFixed(2);
	}

	count(items) {
		return items ? items.length : 0;
	}

	get favorites() {
		return this._filteredGoods.filter(i => this.isFavorite(i.id));
	}

	get filteredGoods() {
		return this._filteredGoods;
	}
}

export const goodsService = new GoodsService();