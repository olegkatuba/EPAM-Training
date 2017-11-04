import "./app.scss";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	sayHello() {
		alert("Hello!");
	}

	render() {
		return (
			<div className="ok-hi-block">
				<h1 className="ok-hi-block--header">Hello {this.props.name}!</h1>
				<button className="ok-hi-block--button" onClick={this.sayHello}>Click to say hello</button>
			</div>
		);
	}
}

ReactDOM.render(<App name="React"/>, document.getElementById("app"));