import React from "react";
import { Header } from "../components";
import logo from "../newflix-logo.png";
import * as ROUTES from "../constants/routes";
import useAuthStateChanged from "../hooks/useAuthStateChanged";
import { auth } from "../lib/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function HeaderContainer({ children, ...props }) {
	const { connexion, browsePage, category, setCategory } = props;
	const user = useAuthStateChanged();
	const navigate = useNavigate();

	const handleSignOut = () => {
		navigate("/");
		signOut(auth);
	};
	return (
		<Header {...props}>
			<Header.Wrapper>
				{browsePage ? (
					<>
						<Header.Group>
							<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix logo" />
							<Header.TextLink
								className={category === "movies" ? "active" : ""}
								onClick={() => setCategory("movies")}>
								Films
							</Header.TextLink>
							<Header.TextLink
								className={category === "series" ? "active" : ""}
								onClick={() => setCategory("series")}>
								Series
							</Header.TextLink>
						</Header.Group>
						<Header.Group>
							<Header.Profile>
								<Header.ProfilePicture
									src={`/assets/users/${user?.photoURL}.png`}
								/>
								<Header.DropDown>
									<Header.Group>
										<Header.ProfilePicture
											src={`/assets/users/${user?.photoURL}.png`}
										/>
										<Header.DropDownText>
											{user?.displayName}
										</Header.DropDownText>
									</Header.Group>
									<Header.Group>
										<Header.DropDownText onClick={handleSignOut}>
											Sign Out
										</Header.DropDownText>
									</Header.Group>
								</Header.DropDown>
							</Header.Profile>
						</Header.Group>
					</>
				) : (
					<>
						<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix logo" />
						{!connexion && (
							<Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
						)}
					</>
				)}
			</Header.Wrapper>
			{children}
		</Header>
	);
}
