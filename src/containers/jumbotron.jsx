import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";

export default function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{jumboData.map((item) => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.TextBox>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
					</Jumbotron.TextBox>
					<Jumbotron.ImageBox>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.ImageBox>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}
