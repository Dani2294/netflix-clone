import React from "react";
import { Container, Card } from "./styles/loading-slides";

export default function LoadingSlides({ ...props }) {
	return (
		<Container {...props}>
			{[1, 2, 3, 4, 5, 6].map((item) => (
				<Card key={item} />
			))}
		</Container>
	);
}
