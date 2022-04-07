import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Header,
	LoadingSlides,
	PlayerWrapper,
	ToastNotif,
} from "../components";
import FooterContainer from "./footer";
import HeaderContainer from "./header";
import SlidesContainer from "./slides";
import { LoadingHero } from "../components/loading-slides";
import ModalContainer from "./modalContainer";

export default function BrowseContainer({ result }) {
	const [content, setContent] = useState([]);
	const [category, setCategory] = useState("movies");
	const [myList, setMyList] = useState(
		JSON.parse(localStorage.getItem("newflix-myList")) || []
	);
	const [myListNotif, setMyListNotif] = useState({ text: "", bg: "" });
	const [featureContent, setFeatureContent] = useState(null);
	const [modal, setModal] = useState({ isOpen: false, data: {}, video: null });
	const [showPlayer, setShowPlayer] = useState(false);

	useEffect(() => {
		setContent(result[category]);
		setFeatureContent(content[0]?.slides[0]);

		return () => null;
	}, [result, category, content]);

	const handleMyList = (action, movie) => {
		if (action === "add") {
			const isAlreadyIn = myList.find((item) => item.id === movie.id);
			if (isAlreadyIn) return null;
			setMyList((prevState) => {
				return [movie, ...prevState];
			});
			localStorage.setItem(
				"newflix-myList",
				JSON.stringify([...myList, movie])
			);
			setMyListNotif({ text: "Added to My List", bg: "#16a34a" });
			setTimeout(() => {
				setMyListNotif({ text: "", bg: "" });
			}, 2000);
		} else if (action === "remove") {
			const isAlreadyIn = myList.find((item) => item.id === movie.id);
			if (isAlreadyIn) {
				const filteredArr = myList.filter((item) => item.id !== movie.id);
				setMyList(filteredArr);
				localStorage.setItem("newflix-myList", JSON.stringify(filteredArr));
				setMyListNotif({ text: "Removed from My List", bg: "#dc2626" });
				setTimeout(() => {
					setMyListNotif({ text: "", bg: "" });
				}, 2000);
			}
		}
	};

	const handleModalData = (id) => {
		axios
			.get(
				`https://api.themoviedb.org/3/tv/${id}?api_key=750d717aee423aa3221d0ac25396478e&append_to_response=videos`
			)
			.then(({ data }) => {
				setModal((prevState) => ({
					isOpen: !prevState.isOpen,
					data,
					video:
						data.videos?.results
							?.filter((vid) => vid.site === "YouTube")
							.find((item) => item.type === "Trailer")?.key || null,
				}));
			})
			.catch((error) => {
				console.log(error.message);
				axios
					.get(
						`https://api.themoviedb.org/3/movie/${id}?api_key=750d717aee423aa3221d0ac25396478e&append_to_response=videos`
					)
					.then(({ data }) => {
						setModal((prevState) => ({
							isOpen: !prevState.isOpen,
							data,
							video:
								data.videos?.results
									?.filter((vid) => vid.site === "YouTube")
									.find((item) => item.type === "Trailer")?.key || null,
						}));
					})
					.catch((error) => {
						console.log(error.message);
					});
			});
	};

	return (
		<div className="relative">
			{myListNotif.text && (
				<ToastNotif bg={myListNotif.bg}>{myListNotif.text}</ToastNotif>
			)}
			<HeaderContainer
				connexion
				browsePage
				src={`https://image.tmdb.org/t/p/original${featureContent?.poster_path}`}
				category={category}
				setCategory={setCategory}>
				{featureContent ? (
					<Header.Feature>
						<Header.FeatureTitle>
							{featureContent?.original_title ||
								featureContent?.title ||
								featureContent?.name ||
								featureContent?.original_name}
						</Header.FeatureTitle>
						<Header.FeatureText>{featureContent?.overview}</Header.FeatureText>
						<Header.FeatureButtons>
							<Header.FeatureButton
								onClick={() => {
									handleModalData(featureContent.id);
									setShowPlayer(!showPlayer);
								}}
								playBtn="true">
								Trailer
							</Header.FeatureButton>
							<Header.FeatureButton
								onClick={() => handleModalData(featureContent.id)}>
								More infos
							</Header.FeatureButton>
						</Header.FeatureButtons>
					</Header.Feature>
				) : (
					<LoadingHero />
				)}
			</HeaderContainer>
			{content.length > 0 ? (
				<SlidesContainer
					content={content}
					myList={myList}
					handleMyList={handleMyList}
					handleModalData={handleModalData}
				/>
			) : (
				<LoadingSlides />
			)}
			{modal.isOpen && (
				<ModalContainer
					setModal={setModal}
					modal={modal}
					myList={myList}
					handleMyList={handleMyList}
					showPlayer={showPlayer}
					setShowPlayer={setShowPlayer}
				/>
			)}
			{showPlayer && (
				<PlayerWrapper
					urlKey={modal.video}
					showPlayer={showPlayer}
					setShowPlayer={setShowPlayer}
				/>
			)}
			<FooterContainer />
		</div>
	);
}
