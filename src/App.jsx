import React, { useState } from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import './App.css';

const App = () => {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [selectedNames, setSelectedNames] = useState([]);

	const endCurrentStage = () => {
		if (score > bestScore) {
			setBestScore(score);
		}
		setScore(0);
		setSelectedNames([]);
	};

	const incrementScore = () => {
		setScore(() => score + 1);
	};

	return (
		<div className="App">
			<Header score={score} bestScore={bestScore} />
			{/* {selectedNames.map(name => {
				return (
					<h4 key={name}>{name}</h4>
				)
			})} */}
			<CardGrid
				endCurrentStage={endCurrentStage}
				incrementScore={incrementScore}
				setSelectedNames={setSelectedNames}
				selectedNames={selectedNames}
			/>
		</div>
	);
};

export default App;