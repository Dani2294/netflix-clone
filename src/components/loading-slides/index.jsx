import React from "react";
import { Container, Card } from "./styles/loading-slides";

export default function LoadingSlides({ ...props }) {
	return (
		<Container {...props}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</Container>
	);
}
