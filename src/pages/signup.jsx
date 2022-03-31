import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, ToastNotif } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { auth } from "../lib/firebase-config";

export default function SignUp() {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

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
					setError("");
					navigate(ROUTES.BROWSE);
				});
		} catch (error) {
			//console.log(error.code);
			console.log(error.message);
			setFirstName("");
			setEmail("");
			setPassword("");
			switch (error.code) {
				case "auth/weak-password":
					setError("Password should be at least 6 characters");
					break;
				case "auth/email-already-exists":
					setError("This email adress is already used");
					break;
				case "auth/invalid-email":
					setError("This email adress is not valid");
					break;
				default:
					setError(error.message);
					break;
			}
			setTimeout(() => {
				setError("");
			}, 5000);
		}
	};
	return (
		<div className="relative">
			{error && <ToastNotif bg="#dc2626">{error}</ToastNotif>}
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
		</div>
	);
}
