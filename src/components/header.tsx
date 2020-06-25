import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const NavItem = ({ children, link }: any) => (
	<div className="item">
		<Link className="link" to={link}>
			{children}
		</Link>
	</div>
)

const Header = ({ siteTitle }: any) => (
	<header>
		<div className="container">
			<div className="wrapper">
				<NavItem link="/">Home</NavItem>
				<NavItem link="/projects">Projects</NavItem>
				<NavItem link="/blog">Blog</NavItem>
				<NavItem link="/resume">CV / Resume</NavItem>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
