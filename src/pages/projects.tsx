import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/home.scss"
import "../styles/projects.scss"
import Project from "../components/project"

const ProjectsPage = () => {
	return (
		<Layout>
			<SEO title="Projects" />
			<div className="home-container" style={{ height: "50vh" }}>
				<div className="title">
					<div className="name" style={{ textAlign: "center" }}>
						Projects
					</div>
				</div>
			</div>
			<div className="projects--container">
				<Project
					title="bCommerce API"
					repo="bpofficial/bcommerce"
					description={
						"An API similiar to that of WooCommerce for " +
						"wordpress, however designed and built for " +
						"React/Vue/Angular projects."
					}
					tags={["TypeScript", "NodeJS", "ExpressJS"]}
				>
					<div style={{ textAlign: "left" }}>
						<span className="projects--subtitle">
							<a href="#">API Docs</a>
						</span>
						<span className="projects--subtitle">
							<a href="#">Blog Story</a>
						</span>
					</div>
				</Project>
				<Project
					title="Unify App"
					repo=""
					description={
						"A mobile app designed to assist students " +
						"with consolidating the plethora of information " +
						"given to them by their institution's software."
					}
					tags={["React Native", "TypeScript"]}
				>
					<div style={{ textAlign: "left" }}>
						<span
							className="projects--subtitle"
							style={{ fontStyle: "italic", fontWeight: "bold" }}
						>
							Contracted Project
						</span>
					</div>
				</Project>
				<Project
					title="Trade App"
					repo=""
					description={
						"A mobile app built for retailers to order supplies " +
						"of a product, to simplify the process of " +
						"placing, tracking & receiving orders."
					}
					tags={["React Native", "TypeScript"]}
				>
					<div style={{ textAlign: "left" }}>
						<span
							className="projects--subtitle"
							style={{ fontStyle: "italic", fontWeight: "bold" }}
						>
							Contracted Project
						</span>
					</div>
				</Project>
				<Project
					title="braydenp.com"
					repo="bpofficial/website"
					description=""
					tags={["GatsbyJS", "TypeScript"]}
				/>
			</div>
		</Layout>
	)
}

export default ProjectsPage
