import React from "react";
import { CtaForm } from "../components";

export default function CtaFormContainer() {
	return (
		<CtaForm>
			<CtaForm.Text>
				If you like this Netflix Clone and want to get in touch with me. Feel
				free to contact me.
			</CtaForm.Text>
			<CtaForm.Frame>
				<CtaForm.Input placeholder="Click on the button to send me a email" />
				<CtaForm.Button>Contact Me</CtaForm.Button>
			</CtaForm.Frame>
		</CtaForm>
	);
}
