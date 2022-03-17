import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import useAuthStateChanged from "./hooks/useAuthStateChanged";

function App() {
	const userData = useAuthStateChanged();
	return (
		<Router>
			<Routes>
				<Route
					path={ROUTES.HOME}
					element={userData ? <Navigate to={ROUTES.BROWSE} /> : <Home />}
				/>
				<Route
					path={ROUTES.SIGNIN}
					element={userData ? <Navigate to={ROUTES.BROWSE} /> : <SignIn />}
				/>
				<Route
					path={ROUTES.SIGNUP}
					element={userData ? <Navigate to={ROUTES.BROWSE} /> : <SignUp />}
				/>
				<Route
					path={ROUTES.BROWSE}
					element={!userData ? <Navigate to={ROUTES.SIGNIN} /> : <Browse />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
