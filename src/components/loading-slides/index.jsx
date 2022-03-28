import React from "react";
import { Container, Card, Box } from "./styles/loading-slides";

export default function LoadingSlides({ ...props }) {
	return (
		<Container {...props}>
			{[1, 2, 3, 4, 5].map((item) => (
				<Card key={item} />
			))}
		</Container>
	);
}

export function LoadingHero({ ...props }) {
	return <Box {...props} />;
}
