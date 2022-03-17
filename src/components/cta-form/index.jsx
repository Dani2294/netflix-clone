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
		<Button {...props}>
			{children} <img src="/assets/icons/chevron-right.png" alt="Try Now" />
		</Button>
	);
};
