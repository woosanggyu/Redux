import { React, useState } from "react";

function Home() {
	const [text, setText] = useState("");

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		// e.preventDefault()는 a 태그, submit 태그의 고유 동작을 중지시킴.
		e.preventDefault();
		setText("");
	}

	return (
		<>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type='text' value={text} onChange={onChange} />
				<button>Write Todo</button>
			</form>
			<ul></ul>
		</>
	);
}

export default Home;
