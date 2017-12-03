import React from 'react';
import './dropdown.scss';

export class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapsed: true,
			currentItem: props.default ? props.items.find(i => props.default === i.value) || props.items[0] : props.items[0]
		};
	}

	handleClick() {
		this.setState(prevState => ({
			isCollapsed: !prevState.isCollapsed
		}));
	}

	itemClick(item) {
		this.setState({currentItem: item});
		item.onSelected && item.onSelected(item);
	}

	render() {
		return (
			<div className={`dropdown ${this.state.isCollapsed ? 'collapsed' : null}`} onClick={::this.handleClick}>
				<div className={`dropdown--current-item`}>
					<div className='dropdown--current-item-text'>{this.state.currentItem.title}</div>
					<div className='dropdown--arrow'>▲</div>
				</div>
				{!this.state.isCollapsed && this.props.items.length > 1 ?
					<div className="dropdown--items">
						{this.props.items.filter(item => item.value !== this.state.currentItem.value).map((item, i) =>
							<div key={i} className="dropdown--item" onClick={this.itemClick.bind(this, item)}>
								{item.title}
							</div>
						)}
					</div> : null}
			</div>
		);
	}
}
