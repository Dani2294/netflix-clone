import React from "react";
import { Container, Title, SubTitle } from "./styles/hero";

export default function Hero({ children, ...props }) {
	return (
		<Container className="home-bottom-border" {...props}>
			{children}
		</Container>
	);
}

Hero.Title = function HeroTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Hero.SubTitle = function HeroSubTitle({ children, ...props }) {
	return <SubTitle {...props}>{children}</SubTitle>;
};
