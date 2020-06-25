import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

interface IProps {
	title: string
	repo: string
	description: string
	children?: any
	tags?: string[]
}

const Project = ({ title, repo, description, children, tags }: IProps) => {
	return (
		<div className="projects--item">
			<div className="projects--body">
				<div className="projects--title">{title}</div>
				{repo ? (
					<div className="projects--subtitle">
						<FontAwesomeIcon icon={faGithub} />
						<a href={`https://github.com/${repo}`}>{repo}</a>
					</div>
				) : (
					<></>
				)}
				<div className="projects--desc">{description}</div>
				{children}
				<div className="projects--tags">
					{tags?.map(t => (
						<span className="tag">{t}</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default Project
