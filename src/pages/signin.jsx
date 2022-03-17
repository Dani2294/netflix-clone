import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { auth } from "../lib/firebase-config";
import useAuthStateChanged from "../hooks/useAuthStateChanged";

export default function SignIn() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const isInvalid = email === "" || password === "";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password).then((res) => {
				console.log(res);
				navigate(ROUTES.BROWSE);
			});
		} catch (error) {
			console.log(error.message);
			setEmail("");
			setPassword("");
			setError(error.message);
		}
	};

	return (
		<>
			<HeaderContainer connexion={true}>
				<Form>
					<Form.Wrapper>
						<Form.Title>Sign In</Form.Title>
						<Form.Main onSubmit={handleSubmit}>
							<Form.Input
								type="email"
								value={email}
								onChange={({ target }) => setEmail(target.value)}
								placeholder="Email"
							/>
							<Form.Input
								value={password}
								onChange={({ target }) => setPassword(target.value)}
								type="password"
								placeholder="Password"
								autoComplete="off"
							/>
							<Form.Submit disabled={isInvalid} type="submit">
								Sign In
							</Form.Submit>
						</Form.Main>
						<Form.Other>
							<Form.Text>
								New to Netflix?
								<Form.Link to={ROUTES.SIGNUP}> Sign up now</Form.Link>.
							</Form.Text>
							<Form.TextSmall>
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot. <a href="#">Learn more.</a>
							</Form.TextSmall>
						</Form.Other>
					</Form.Wrapper>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
