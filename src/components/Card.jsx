import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

	const handleClick = () => {
		if(props.selectedNames.includes(props.name)){
			props.endCurrentStage();
		} else {
			props.setSelectedNames([...props.selectedNames, props.name]);
			props.incrementScore();
		}
		props.randomizeCards();
	};

	return (
		<div className="card" key={props.image} onClick={handleClick}>
			<img src={props.image} alt={props.name}></img>
			<br></br>
			<span>
				<strong>{props.name}</strong>
			</span>
		</div>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	selectedNames: PropTypes.string,
	endCurrentStage: PropTypes.func,
	incrementScore: PropTypes.func,
	randomizeCards: PropTypes.func,
	setSelectedNames: PropTypes.func,
};

export default Card;