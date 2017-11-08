import React from 'react';
import './dropdown.scss';

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isCollapsed: true, currentItem: this.props.items[0]};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isCollapsed: !prevState.isCollapsed
		}));
	}

	itemClick(item) {
		this.setState({currentItem: item});
		item.onSelected && item.onSelected();
	}

	render() {
		return (
			<div className='dropdown' onClick={this.handleClick}>
				<div className={`dropdown--current-item ${this.state.isCollapsed ? 'collapsed' : null}` }>{this.state.currentItem.value}</div>
				{!this.state.isCollapsed && this.props.items.length > 1 ?
					<div className="dropdown--items">
						{this.props.items.filter(item => item !== this.state.currentItem).map((item, i) =>
							<div key={i} className="dropdown--item" onClick={() => this.itemClick(item)}>
								{item.value}
							</div>
						)}
					</div> : null}
			</div>
		);
	}
}
