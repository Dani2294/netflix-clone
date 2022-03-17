import React, { useEffect, useState } from "react";
import { Header, LoadingSlides } from "../components";
import FooterContainer from "./footer";
import HeaderContainer from "./header";
import SlidesContainer from "./slides";

export default function BrowseContainer({ result }) {
	const [content, setContent] = useState([]);
	const [category, setCategory] = useState("movies");
	const [myList, setMyList] = useState(
		JSON.parse(localStorage.getItem("newflix-myList")) || []
	);
	const [featureContent, setFeatureContent] = useState([]);

	useEffect(() => {
		setContent(result[category]);
		setFeatureContent(
			content[0]?.slides[0]
			/* content[Math.floor(Math.random() * content.length)]?.slides[
					Math.floor(Math.random() * 21)
				].poster_path ||
				content[Math.floor(Math.random() * content.length)]?.slides[
					Math.floor(Math.random() * 21)
				].backdrop_path */
		);
		console.log(featureContent);
		return () => null;
	}, [result, category, content]);
	console.log(content);

	const handleMyList = (action, movie) => {
		if (action === "add") {
			const isAlreadyIn = myList.find((item) => item.id === movie.id);
			if (isAlreadyIn) return null;
			setMyList((prevState) => {
				return [...prevState, movie];
			});
			localStorage.setItem(
				"newflix-myList",
				JSON.stringify([...myList, movie])
			);
		} else if (action === "remove") {
			const isAlreadyIn = myList.find((item) => item.id === movie.id);
			if (isAlreadyIn) {
				const filteredArr = myList.filter((item) => item.id !== movie.id);
				setMyList(filteredArr);
				localStorage.setItem("newflix-myList", JSON.stringify(filteredArr));
			}
		}
	};

	return (
		<>
			<HeaderContainer
				connexion
				browsePage
				src={`https://image.tmdb.org/t/p/original${featureContent?.poster_path}`}
				category={category}
				setCategory={setCategory}>
				<Header.Feature>
					<Header.FeatureTitle>
						{featureContent?.original_title ||
							featureContent?.title ||
							featureContent?.name ||
							featureContent?.original_name}
					</Header.FeatureTitle>
					<Header.FeatureText>{featureContent?.overview}</Header.FeatureText>
					<Header.FeatureButtons>
						<Header.FeatureButton playBtn="true">Play</Header.FeatureButton>
						<Header.FeatureButton>More infos</Header.FeatureButton>
					</Header.FeatureButtons>
				</Header.Feature>
			</HeaderContainer>
			{content.length > 0 ? (
				<SlidesContainer
					content={content}
					myList={myList}
					handleMyList={handleMyList}
				/>
			) : (
				<LoadingSlides />
			)}
			<FooterContainer />
		</>
	);
}
