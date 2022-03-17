import React from "react";
import { Background } from "../header/styles/header";

export default function Modal({ children, ...props }) {
	return (
		<Background {...props}>
			<Container>{children}</Container>
		</Background>
	);
}

Modal.Hero = function ModalHero({ ...props }) {
	return <Hero {...props} />;
};

Modal.Content = function ModalContent({ children, ...props }) {
	return <Content {...props}>{children}</Content>;
};
