import React from "react";
import { Footer } from "../components";

export default function FooterContainer() {
	return (
		<Footer>
			<Footer.Title>Questions? Call (+33) 0805-543-064</Footer.Title>
			<Footer.Row>
				<Footer.Column>
					<Footer.Link>FAQ</Footer.Link>
					<Footer.Link>Investor Relations</Footer.Link>
					<Footer.Link>Ways to Watch</Footer.Link>
					<Footer.Link>Corporate Information</Footer.Link>
					<Footer.Link>Only on Netflix</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link>Help Center</Footer.Link>
					<Footer.Link>Jobs</Footer.Link>
					<Footer.Link>Terms of Use</Footer.Link>
					<Footer.Link>Contact Us</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link>Account</Footer.Link>
					<Footer.Link>Redeem Gift Cards</Footer.Link>
					<Footer.Link>Privacy</Footer.Link>
					<Footer.Link>Speed Test</Footer.Link>
				</Footer.Column>
				<Footer.Column>
					<Footer.Link>Media Center</Footer.Link>
					<Footer.Link>Buy Gift Cards</Footer.Link>
					<Footer.Link>Cookie Preferences</Footer.Link>
					<Footer.Link>Legal Notices</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Text>Netflix France</Footer.Text>
			<Footer.Credits>
				Designed and built w/ ❤️ by{" "}
				<a
					style={{ textDecoration: "underline" }}
					target="_blank"
					href="https://daniel-agbato.vercel.app/">
					Daniel Agbato
				</a>
			</Footer.Credits>
		</Footer>
	);
}
