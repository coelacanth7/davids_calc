import React from "react";

const Message = ({ inTime, outTime }) => {
	function parseTimes(start, end) {
		return {
			startMinutes: Number(start.slice(3)) + Number(start.slice(0, 2)) * 60,
			endMinutes: Number(end.slice(3)) + Number(end.slice(0, 2)) * 60
		};
	}

	function makeHumanReadableStr(difference) {
		return `${Math.floor(difference / 60)} hours ${difference % 60} minutes`;
	}

	function subtractTime(start, end) {
		const times = parseTimes(start, end);
		const difference = times.endMinutes - times.startMinutes;
		if (difference < 0 || difference === 0) return "Bitch that aint no time";
		return {
			differenceNoLunch: makeHumanReadableStr(difference),
			differenceWithLunch:
				difference > 30
					? makeHumanReadableStr(difference - 30) +
					  " if you subtract lunch."
					: "Bitch there aint enough time for no lunch"
		};
	}

	function renderMessage() {
		const times = subtractTime(inTime, outTime);
		if (typeof times === "string") return times;
		return (
			<div>
				Bitch that's {times.differenceNoLunch} and {times.differenceWithLunch}
			</div>
		);
	}

	return (
		<div className="message">
			{inTime && outTime && renderMessage()}
		</div>
	);
};

export default Message;
