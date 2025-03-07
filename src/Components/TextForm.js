import React, { useState } from 'react'

export default function TextForm(props) {
	const handleUpClick = () => {
		let newText = text.toLocaleUpperCase();
		setText(newText);
	}
	const handleOnChange = (event) => {

		setText(event.target.value);
	}
	const handleLowClick = (event) => {
		let newText = text.toLocaleLowerCase();
		setText(newText);
	}
	const handleClear = () => {
		setText("");
	}
	const handleSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "))
	}
	const [text, setText] = useState("");
	return (
		<>
			<div className="container">
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
				<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
				<button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
				<button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Space</button>
			</div>
			<div className="container my-3" >
				<h2>Your text summary</h2>
				<p>{text.split(" ").length} words and {text.length} characters</p>
				<p>{0.008 * text.split(" ").length} Minutes required to read</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Enter your text to preview"}</p>
			</div>
		</>
	)
}
