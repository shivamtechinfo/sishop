'use client';

import React, {  useRef } from 'react';
import JoditEditor from "jodit-pro-react"; // or "jodit-react" if using free version


const TextEditor = ({  value, changeHandler }) => {
	const editor = useRef(null);

	return (
		<JoditEditor
			ref={editor}
			value={value}
			tabIndex={1}
            onChange={(data)=> changeHandler(data)}
		/>
	);
};

export default TextEditor;
