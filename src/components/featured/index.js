import React from 'react';
import logo from '../../resources/images/logo.png';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';


const Featured = () => {
	return ( 
		<div style={{position:'relative'}}>
			<Carrousel />
			<div className="artist_name">
				<div className="wrapper">
					<img src={logo} alt="logo" style={{transform: "translateY(-40px)"}}/>
				</div>
			</div>
			<TimeUntil />
		</div>
	);
};

export default Featured;