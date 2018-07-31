import React, { Component } from "react";

import TimePicker from "./TimePicker";
import Message from "./Message";

class App extends Component {
	constructor() {
		super();

		this.state = {
			inTime: "",
			outTime: "",
		};

		this.updateState = this.updateState.bind(this);
	}

	updateState(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Hey David</h1>
				</header>
				<TimePicker
					name="inTime"
					label="fuckin in time"
					value={this.state.inTime}
					onChange={this.updateState}
				/>
				<TimePicker
					name="outTime"
					label="fuckin out time"
					value={this.state.outTime}
					onChange={this.updateState}
				/>
				<Message inTime={this.state.inTime} outTime={this.state.outTime} />
        <footer><a href="https://gregoryalford.com/">made by me</a></footer>
			</div>
		);
	}
}

export default App;
