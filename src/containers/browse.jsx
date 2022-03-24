import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, LoadingSlides, Modal, PlayerWrapper } from "../components";
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
							?.filter((vid) => vid.type === "Trailer")
							.find((item) => item.type === "Trailer")?.key || null,
				}));
			})
			.catch((error) => {
				//console.log(error.message);
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
									?.filter((vid) => vid.type === "Trailer")
									.find((item) => item.type === "Trailer")?.key || null,
						}));
					})
					.catch((error) => {
						console.log(error.message);
					});
			});
	};

	return (
		<div className={`${modal.isOpen ? "lock-body" : ""}`}>
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
				<Modal setModal={setModal} modal={modal}>
					<Modal.CloseBtn
						onClick={() =>
							setModal((prevState) => ({
								...prevState,
								isOpen: !prevState.isOpen,
							}))
						}>
						<img src="/assets/icons/add.png" alt="close modal" />
					</Modal.CloseBtn>
					<Modal.Hero
						src={`https://image.tmdb.org/t/p/original${modal.data?.poster_path}`}>
						<Modal.HeroActionsPlay
							onClick={() => setShowPlayer(!showPlayer)}
							playBtn="true">
							Trailer
						</Modal.HeroActionsPlay>
						{myList.find((item) => item.id === modal.data.id) ? (
							<Modal.HeroActionsList
								title="remove from my list"
								onClick={() => handleMyList("remove", modal.data)}
								rotate="45deg">
								<img src="/assets/icons/add.png" alt="remove from my list" />
							</Modal.HeroActionsList>
						) : (
							<Modal.HeroActionsList
								title="add to my list"
								onClick={() => handleMyList("add", modal.data)}>
								<img src="/assets/icons/add.png" alt="add to my list" />
							</Modal.HeroActionsList>
						)}
					</Modal.Hero>
					<Modal.Content>
						<Modal.Title>
							{modal.data.title ||
								modal.data.original_title ||
								modal.data.name ||
								modal.data.original_name}
						</Modal.Title>
						<Modal.Genres>
							{modal.data.genres.map((genre) => genre.name).join(" | ")}
						</Modal.Genres>
						<Modal.Overview>{modal.data.overview}</Modal.Overview>
						<Modal.ReleaseDate>{modal.data.release_date}</Modal.ReleaseDate>
						<Modal.Recommendation>
							Recommended at {(Math.ceil(modal.data.vote_average) * 100) / 10}%
						</Modal.Recommendation>
					</Modal.Content>
				</Modal>
			)}
			{showPlayer && (
				<PlayerWrapper urlKey={modal.video}>
					<PlayerWrapper.CloseBtn
						title="Close modal"
						onClick={() => setShowPlayer(!showPlayer)}>
						<img src="/assets/icons/add.png" alt="remove from my list" />
					</PlayerWrapper.CloseBtn>
				</PlayerWrapper>
			)}
			<FooterContainer />
		</div>
	);
}
