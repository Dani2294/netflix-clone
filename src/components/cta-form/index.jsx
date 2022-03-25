import React from "react";
import { Container, Text, Frame, Input, Button } from "./styles/cta-form";

export default function CtaForm({ children, ...props }) {
	return (
		<Container onSubmit={(e) => e.preventDefault()} {...props}>
			{children}
		</Container>
	);
}

CtaForm.Text = function CtaFormText({ children, ...props }) {
	return <Text {...props}>{children}</Text>;
};

CtaForm.Frame = function CtaFormFrame({ children, ...props }) {
	return <Frame {...props}>{children}</Frame>;
};

CtaForm.Input = function CtaFormInput({ ...props }) {
	return <Input {...props} />;
};

CtaForm.Button = function CtaFormButton({ children, ...props }) {
	return (
		<Button
			href="mailto:agbato.dani@gmail.com?subject=From Netflix Clone&body=Hello Daniel, I would like to talk about you and your project..."
			target="_blank"
			rel="noreferrer"
			{...props}>
			{children} <img src="/assets/icons/chevron-right.png" alt="Try Now" />
		</Button>
	);
};
