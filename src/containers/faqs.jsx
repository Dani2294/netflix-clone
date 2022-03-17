import React from "react";
import { Accordion } from "../components";
import CtaFormContainer from "./cta-form";
import faqsData from "../fixtures/faqs.json";

export default function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.List>
				{faqsData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Button itemID={item.id}>{item.header}</Accordion.Button>
						<Accordion.Body itemID={item.id}>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.List>

			<CtaFormContainer />
		</Accordion>
	);
}
