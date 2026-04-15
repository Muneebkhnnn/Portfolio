import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;
	const [showFallback, setShowFallback] = useState(!logo);

	const projectInitial = title?.trim()?.charAt(0)?.toUpperCase() || "P";
	const isExternalLink = /^https?:\/\//i.test(link || "");

	return (
		<div className="project">
			<a
				className="project-anchor"
				href={link}
				{...(isExternalLink
					? {
							target: "_blank",
							rel: "noreferrer noopener",
					  }
					: {})}
			>
				<article className="project-container">
					<div className="project-top-row">
						<div className="project-logo-shell" aria-hidden="true">
							{showFallback ? (
								<span className="project-logo-fallback">{projectInitial}</span>
							) : (
								<img
									className="project-logo"
									src={logo}
									alt={`${title} logo`}
									loading="lazy"
									decoding="async"
									onError={() => setShowFallback(true)}
								/>
							)}
						</div>
					</div>

					<h3 className="project-title">{title}</h3>
					<p className="project-description">{description}</p>

					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</div>
				</article>
			</a>
		</div>
	);
};

export default Project;
