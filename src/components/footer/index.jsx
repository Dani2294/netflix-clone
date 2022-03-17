import React from "react";
import {
	Container,
	Title,
	Row,
	Column,
	Item,
	Link,
	Text,
} from "./styles/footer";

export default function Footer({ children, ...props }) {
	return <Container {...props}>{children}</Container>;
}

Footer.Title = function FooterTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Footer.Row = function FooterRow({ children, ...props }) {
	return <Row {...props}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...props }) {
	return <Column {...props}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...props }) {
	return (
		<Item {...props}>
			<Link href="#">{children}</Link>
		</Item>
	);
};

Footer.Text = function FooterText({ children, ...props }) {
	return <Text {...props}>{children}</Text>;
};
