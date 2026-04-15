import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/common/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import { SiInstagram } from "react-icons/si";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let message='Hii, I want a 50k full stack website'
	const encodedMessage = encodeURIComponent(message);
	
	const handleMessage = () => {
		console.log('i was clicked')
    const phoneNumber = "919858325704"; 

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

  }

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch
						</div>

						<div className="subtitle contact-subtitle">
							Got a project, an idea, or a bug that refuses to die?
							Reach out to me at my &nbsp;{""}
							<span onClick={handleMessage} className="Phone">Phone Number</span> Or at my emial
							&nbsp;{" "}
							<a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${INFO.main.email}.com`}>
								{INFO.main.email}
							</a>
							. I’m always up for building, fixing, or learning something new.
							<br />
							<br />
							Whether it’s a full-stack role, a freelance project, or just a tech conversation,
							you can mail me or connect through any of my social links. I reply fast, you can find me on{" "}
							<span className="insta-container">
								<a className="instagram-icon"
									href={INFO.socials.instagram} target="_blank" rel="noreferrer">
									<SiInstagram />
								</a>
							</span>
						</div>
					</div>


					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
