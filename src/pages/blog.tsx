import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

const blog = () => {
	return (
		<Layout>
			<SEO title="Blog" />
			<Parallax pages={3} scrolling={true}>
				<ParallaxLayer offset={0} speed={0}>
					<div className="home-container">
						<div className="title">
							<div className="name">Blogs</div>
							<br />
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</Layout>
	)
}

export default blog
