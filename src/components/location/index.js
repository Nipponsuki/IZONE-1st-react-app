import React from 'react';

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.4398617379!2d126.89508871516124!3d37.5682587797976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99162975a2f1%3A0x680de03f7adc4155!2sSeoul+World+Cup+Stadium!5e0!3m2!1sen!2sjp!4v1547988938116" 
				width="100%" 
				height="500px" 
				frameBorder="0" 
				allowFullScreen >
			</iframe>

			<div className="location_tag">
				<div>Location</div>
			</div>
			
		</div>

	);
};

export default Location;