import React from 'react';
import About from './components/About';
import ContentBox from './components/contentBox/ContentBox';

export default function MainPage(props) {
	const { setPagePointer } = props;
	return (
		<>
			<About />
			<ContentBox setPagePointer={setPagePointer} />
		</>
	);
}
