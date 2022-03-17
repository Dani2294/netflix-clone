import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { auth } from "../lib/firebase-config";

export default function SignUp() {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isInvalid = firstName === "" || password === "" || email === "";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(auth, email, password)
				.then((res) => {
					updateProfile(res.user, {
						displayName: firstName,
						photoURL: JSON.stringify(Math.floor(Math.random() * 5) + 1),
					});
				})
				.then(() => {
					navigate(ROUTES.BROWSE);
				});
		} catch (error) {
			console.log(error.message);
			setFirstName("");
			setEmail("");
			setPassword("");
			setError(error.message);
		}
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Wrapper>
						<Form.Title>Sign Up</Form.Title>
						<Form.Main onSubmit={handleSubmit}>
							<Form.Input
								value={firstName}
								onChange={({ target }) => setFirstName(target.value)}
								type="text"
								placeholder="First name"
							/>
							<Form.Input
								value={email}
								onChange={({ target }) => setEmail(target.value)}
								type="email"
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
								Sign Up
							</Form.Submit>
						</Form.Main>
						<Form.Other>
							<Form.Text>
								Already a user?
								<Form.Link to={ROUTES.SIGNIN}> Sign in now</Form.Link>.
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
