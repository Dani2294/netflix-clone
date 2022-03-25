import React, { useState } from "react";

import { useSpring, animated, useTransition } from "react-spring";
import {
	Container,
	Title,
	Row,
	Card,
	Image,
	Meta,
	MetaHeader,
	MetaTitle,
	MetaButtons,
	MetaButton,
	MetaDescription,
	MetaRecommendation,
} from "./styles/slides";

export default function Slides({ children, ...props }) {
	return <Container {...props}>{children}</Container>;
}

Slides.Title = function SlidesTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Slides.Row = function SlidesRow({ children, ...props }) {
	return <Row {...props}>{children}</Row>;
};

Slides.Card = function SlidesCard({ children, ...props }) {
	const propsSpring = useSpring({
		from: { opacity: 0, translateX: "400px" },
		to: { opacity: 1, translateX: "0px" },
		config: { duration: 150 },
	});
	return (
		<animated.div style={{ ...propsSpring }}>
			<Card {...props}>{children}</Card>
		</animated.div>
	);
};

Slides.Image = function SlidesImage({ ...props }) {
	return <Image {...props} />;
};

Slides.Meta = function SlidesMeta({ children, ...props }) {
	return <Meta {...props}>{children}</Meta>;
};

Slides.MetaHeader = function SlidesMetaHeader({ children, ...props }) {
	return <MetaHeader {...props}>{children}</MetaHeader>;
};

Slides.MetaTitle = function SlidesMetaTitle({ children, ...props }) {
	return <MetaTitle {...props}>{children}</MetaTitle>;
};

Slides.MetaButtons = function SlidesMetaButtons({ children, ...props }) {
	return <MetaButtons {...props}>{children}</MetaButtons>;
};

Slides.MetaButton = function SlidesMetaButton({ children, ...props }) {
	return <MetaButton {...props}>{children}</MetaButton>;
};

Slides.MetaDescription = function SlidesMetaDescription({
	children,
	...props
}) {
	return <MetaDescription {...props}>{children}</MetaDescription>;
};

Slides.MetaRecommendation = function SlidesMetaRecommendation({
	children,
	...props
}) {
	return <MetaRecommendation {...props}>{children}</MetaRecommendation>;
};
