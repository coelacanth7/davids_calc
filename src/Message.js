import React, { Component } from "react";

class Message extends Component {
	constructor() {
		super();

		this.state = {
			differenceNoLunch: "",
			differenceWithLunch: ""
		};
	}

	parseTimes(start, end) {
		return {
			startMinutes:
				Number(start.slice(3)) + Number(Number(start.slice(0, 2)) * 60),
			endMinutes: Number(end.slice(3)) + Number(Number(end.slice(0, 2)) * 60)
		};
	}

	makeHumanReadableStr(difference) {
		return `${Math.floor(difference / 60)} hours ${difference %
			60} minutes`;
	}

	subtractTime(start, end) {
		const times = this.parseTimes(start, end);
		const difference = times.endMinutes - times.startMinutes;
		if (difference < 0) return "Bitch that aint no time";
		return {
			differenceNoLunch: this.makeHumanReadableStr(difference),
			differenceWithLunch:
				difference > 30
					? this.makeHumanReadableStr(difference - 30) +
					  " if you subtract lunch."
					: "Bitch there aint enough time for no lunch"
		};
	}

	renderMessage() {
		const times = this.subtractTime(this.props.inTime, this.props.outTime);
		if (typeof times === "string") return times;
		return (
			<div>
				Bitch that's {times.differenceNoLunch} and {times.differenceWithLunch}
			</div>
		);
	}

	render() {
		return (
			<div className="message">
				{this.props.inTime && this.props.outTime && this.renderMessage()}
			</div>
		);
	}
}

export default Message;
