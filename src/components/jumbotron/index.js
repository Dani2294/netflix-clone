import React from "react";
import {
	Item,
	Inner,
	Container,
	TextBox,
	ImageBox,
	Title,
	SubTitle,
	Image,
} from "./styles/jumbotron";

export default function Jumbotron({ children, direction = "row", ...props }) {
	return (
		<Item className="home-bottom-border" {...props}>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
	return <Container {...props}>{children}</Container>;
};

Jumbotron.TextBox = function JumbotronTextBox({ children, ...props }) {
	return <TextBox {...props}>{children}</TextBox>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
	return <SubTitle {...props}>{children}</SubTitle>;
};

Jumbotron.ImageBox = function JumbotronImageBox({ children, ...props }) {
	return <ImageBox {...props}>{children}</ImageBox>;
};

Jumbotron.Image = function JumbotronImage({ children, ...props }) {
	return <Image {...props}>{children}</Image>;
};
