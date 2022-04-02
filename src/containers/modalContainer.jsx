import React from "react";
import { Modal } from "../components";

export default function ModalContainer({
	setModal,
	modal,
	myList,
	handleMyList,
}) {
	return (
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
	);
}
