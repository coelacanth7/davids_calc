import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	}
});

function TimePicker({ classes, label, value, onChange, name }) {
	return (
		<div className={classes.container} noValidate>
			<TextField
				name={name}
				id="time"
				label={label}
				type="time"
				value={value}
				onChange={onChange}
				className={classes.textField}
				InputLabelProps={{
					shrink: true
				}}
				inputProps={{
					step: 300 // 5 min
				}}
			/>
		</div>
	);
}

TimePicker.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimePicker);
