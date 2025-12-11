import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import companylogo from '../../assets/apexplanet.png'
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://img.icons8.com/?size=100&id=46315&format=png&color=000000"
								alt="freelancer"
								className="work-image"
							/>
							<div className="work-title">Freelancing</div>
							<div className="work-subtitle">
								Freelance Developer
							</div>
							<div className="work-duration">2025 - Present</div>
						</div>

						<div className="work">
							<img
								src={companylogo}
								alt="ApexPlanet"
								className="work-image"
							/>
							<div className="work-title">ApexPlanet</div>
							<div className="work-subtitle">
								Web Developer Intern
							</div>
							<div className="work-duration">March(2025) - June(2025) </div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
