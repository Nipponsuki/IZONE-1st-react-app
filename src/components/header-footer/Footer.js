import React from 'react';
import Fade from 'react-reveal/Fade'

const Footer = () => {
	return (
		<footer className="bck_blue">
			<Fade delay={500}>
				<div className="font_righteous footer_logo_venue" style={{color:"#000"}}>The Venue</div>
				<div className="footer_copyright" style={{color:"#000"}}>
					The Venue 2018.All rights reserved
				</div>
			</Fade>
		</footer>
	);
};

export default Footer;