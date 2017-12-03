import React from 'react';
import './loading.scss';

export class Loading extends React.Component {

	constructor(props) {
		super(props);
		this.state = {dots: '.'};
	}

	componentDidMount() {
		this._loadingTimer = setInterval(() => {
			this.setState((prevState) => ({
				dots: this.addDotOnLoading(prevState.dots)
			}));
		}, 200);
	}

	componentWillUnmount() {
		clearInterval(this._loadingTimer);
	}

	addDotOnLoading(dots) {
		if (dots.length > 2)
			dots = "";
		else
			dots += ".";
		return dots;
	}

	render() {
		return (
			<div className='loading'>
				<div className='loading--text' style={{color: this.props.color, fontSize: this.props.fontSize}}>
					Loading{this.state.dots}
				</div>
			</div>
		);
	}
}
