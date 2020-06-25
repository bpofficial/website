import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import ScrollReveal from "scrollreveal"

import "../styles/home.scss"

const IndexPage = () => {
	React.useEffect(() => {
		//ScrollReveal().reveal('.home-container', {delay: 500});
	}, [])
	return (
		<Layout>
			<SEO title="Home" />
			<Parallax pages={3} scrolling={true}>
				<ParallaxLayer offset={0} speed={0}>
					<div className="home-container">
						<div className="title">
							<div className="hi">hi there, my name is</div>
							<br />
							<div className="name">Brayden Phillips</div>
							<br />
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</Layout>
	)
}

export default IndexPage
