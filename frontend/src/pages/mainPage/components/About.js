import React from 'react';
import { Animated } from "react-animated-css";
import styles from '../../../app.module.css';

export default function About() {
	return (

		<div className={`${styles["text-default"]} ${styles["full-width"]}`}>
			<Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis neque sed lorem luctus aliquet. Duis ornare viverra lorem, vitae aliquet eros dapibus sit amet. Fusce gravida volutpat est varius malesuada. Mauris luctus urna sit amet eros accumsan, quis eleifend diam ornare. Ut molestie dolor sed massa faucibus,
		</Animated>
		</div>
	);
};