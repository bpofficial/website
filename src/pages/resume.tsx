import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

import '../styles/home.scss';

const ResumePage = () => {
	return (
		<Layout>
			<SEO title="Resume" />
			<Parallax pages={3} scrolling={true}>
				<ParallaxLayer offset={0} speed={0}>
					<div className="home-container">
						<div className="title">
							<div className="name">Resume</div>
							<br />
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</Layout>
	);
};

export default ResumePage;
