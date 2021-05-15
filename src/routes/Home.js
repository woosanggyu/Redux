import { React, useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
	const [text, setText] = useState("");

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		// e.preventDefault()는 a 태그, submit 태그의 고유 동작을 중지시킴.
		e.preventDefault();
		addToDo(text);
		setText("");
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type='text' value={text} onChange={onChange} />
				<button>Write Todo</button>
			</form>
			<ul>{JSON.stringify(toDos)}</ul>
		</>
	);
}

// connect를 사용하여 store와 Home을 연결
function mapStateToProps(state) {
	return { toDos: state };
}

function mapDispatchToProps(dispatch) {
	return {
		addToDo: text => dispatch(actionCreators.addToDo(text)),
	};
}

//connect 를 통해 Home으로 보내는 props를 추가할 수 있게 연결해줌
export default connect(mapStateToProps, mapDispatchToProps)(Home);
