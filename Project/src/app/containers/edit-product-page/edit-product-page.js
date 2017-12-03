import React from 'react';
import './edit-product-page.scss';
import {connect} from "react-redux";

import {ProductInfo} from '../../components';

import arrow from '../../../assets/arrow.svg'
import {Link} from "react-router-dom";

class EditProductComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {isPreview: false};
		if(this.props.match.params.id !== 'new_product'){
			this.fields = this.props.privateGoods.goodsLoaded && this.props.privateGoods.items.find(i => i.id === this.props.match.params.id);
		}
	}

	preview(state) {
		this.fields = state;
		if(this.state.isPreview){
			this.setState({isPreview: false});
		} else {
			this.setState({isPreview: true});
		}
	}

	render() {
		return (
			<div className='page'>
				<div className='page--header'>
					{this.state.isPreview ? <img onClick={::this.preview} src={arrow} width={40} height={40}/> :
					<Link to='/private_catalogs'>
						<img src={arrow} width={40} height={40}/>
					</Link>}
				</div>
				<div className='page-content'>
					<ProductInfo preview={::this.preview}
								 readOnly={this.state.isPreview}
								 product={this.fields}

					/>
				</div>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		privateGoods: state.privateGoods
	}
}

export const EditProduct = connect(mapStateToProps)(EditProductComponent);