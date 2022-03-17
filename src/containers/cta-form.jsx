import React from "react";
import { CtaForm } from "../components";

export default function CtaFormContainer() {
	return (
		<CtaForm>
			<CtaForm.Text>
				Ready to watch? Enter your email to create or restart your membership.
			</CtaForm.Text>
			<CtaForm.Frame>
				<CtaForm.Input placeholder="Email address" />
				<CtaForm.Button>Get Started</CtaForm.Button>
			</CtaForm.Frame>
		</CtaForm>
	);
}
