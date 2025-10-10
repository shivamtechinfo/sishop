'use client';

import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-pro-react"; // or "jodit-react" if using free version

const TextEditor = ({ placeholder, value, changeHandler }) => {
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
