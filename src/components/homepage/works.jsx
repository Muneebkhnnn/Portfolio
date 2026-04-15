import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import companylogo from "../../assets/apexplanet.png";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	const workItems = [
		{
			title: "Freelancing",
			role: "Freelance Developer",
			duration: "2025 - Present",
			image: "https://img.icons8.com/?size=100&id=46315&format=png&color=000000",
			alt: "freelancer",
		},
		{
			title: "ApexPlanet",
			role: "Web Developer Intern",
			duration: "March (2025) - June (2025)",
			image: companylogo,
			alt: "ApexPlanet",
		},
	];

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{workItems.map((item) => (
							<div className="work" key={item.title}>
								<img src={item.image} alt={item.alt} className="work-image" />
								<div className="work-content">
									<div className="work-title">{item.title}</div>
									<div className="work-subtitle">{item.role}</div>
								</div>
								<div className="work-duration">{item.duration}</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
