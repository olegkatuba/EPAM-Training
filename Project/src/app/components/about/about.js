import React from 'react';
import './about.scss';

export class About extends React.Component {
	render() {
		return (
			<div className='catalog'>
				<h2 className='catalog--header'>This application is designed by Oleg</h2>
				<p>Specifications could be download from the link below</p>
				<a href='/'>Download</a>
				<p>Some info</p>
			</div>
		);
	}
}