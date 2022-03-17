import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Hero } from "../components";
import CtaFormContainer from "../containers/cta-form";

import { auth } from "../lib/firebase-config";

export default function Home() {
	return (
		<>
			<HeaderContainer connexion={false}>
				<Hero>
					<Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
					<Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
					<CtaFormContainer />
				</Hero>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
