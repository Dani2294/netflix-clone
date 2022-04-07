import React from "react";
import { motion } from "framer-motion";
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
	const cardVariants = {
		hidden: { opacity: 0, x: -400 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
	};
	return (
		<motion.div variants={cardVariants} initial="hidden" animate="visible">
			<Card {...props}>{children}</Card>
		</motion.div>
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
