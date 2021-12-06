import React from 'react';
import AboutUs from '../images/aboutUs.jpg';
const About = () => {
	const style = {
		marginLeft: '400px',
	};
	return (
		<div>
			<img src={AboutUs} alt="About Us Image" width="100%" height="400px" />
			<div style={style}>
				<p align="left">
					<br />
					"If we work together, we can give the best products to our customers"{' '}
					<br />
				</p>

				<ul align="left">
					<li>Laroma is the electronics retailer</li>
					<li>We have 1000+ employee in Vancouver, BC</li>
					<li>Our company was built in 1990 with the name Roma</li>
					<li>
						In 1992, we changed the name to Laroma and used it until today
					</li>
				</ul>

				<p align="left">
					<b>Our social impact</b>
				</p>
				<ul align="left">
					<li>Every year, we welcome 500+ students to visit our company</li>
					<li>We've also helped 100+ students with the scholarship</li>
				</ul>

				<p align="left">
					<b>Contact us </b> <br />
					999 Victoria Drive, V5P 3W2, Vancouver, British Columbia, Canada{' '}
					<br />
					Phone: <a href="tel:123456789">123-456-789</a>
					<br />
					Email: <a href="mailto:laroma@gmail.com">laroma@gmail.com</a> <br />
					Office Hours: Mon - Fri 8:00 AM - 9:00 PM <br />
					Saturday 9:00 AM - 9:00 PM <br />
					Sunday & Holidays 10:00 AM - 8:00 PM
				</p>
				<br />
				<br />
			</div>
		</div>
	);
};
export default About;
