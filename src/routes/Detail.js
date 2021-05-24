import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDo }) {
	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>CreateAt : {toDo?.id}</h5>
		</>
	);
}

function mapStateToProps(state, ownProps) {
	const {
		match: {
			params: { id },
		},
	} = ownProps;
	return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
