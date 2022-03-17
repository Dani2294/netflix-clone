import React from "react";
import { Link as ReacrRouterLink } from "react-router-dom";
import {
	Container,
	Wrapper,
	Main,
	Title,
	Input,
	Submit,
	Other,
	Text,
	Link,
	TextSmall,
} from "./styles/form";

export default function Form({ children, ...props }) {
	return <Container {...props}>{children}</Container>;
}

Form.Wrapper = function FormWrapper({ children, ...props }) {
	return <Wrapper {...props}>{children}</Wrapper>;
};

Form.Title = function FormTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Form.Main = function FormMain({ children, ...props }) {
	return <Main {...props}>{children}</Main>;
};

Form.Input = function FormInput({ children, ...props }) {
	return <Input {...props}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...props }) {
	return <Submit {...props}>{children}</Submit>;
};

Form.Other = function FormOther({ children, ...props }) {
	return <Other {...props}>{children}</Other>;
};

Form.Text = function FormText({ children, ...props }) {
	return <Text {...props}>{children}</Text>;
};

Form.Link = function FormLink({ to, children, ...props }) {
	return (
		<ReacrRouterLink to={to}>
			<Link {...props}>{children}</Link>
		</ReacrRouterLink>
	);
};

Form.TextSmall = function FormTextSmall({ children, ...props }) {
	return <TextSmall {...props}>{children}</TextSmall>;
};
