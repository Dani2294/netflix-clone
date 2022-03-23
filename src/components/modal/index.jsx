import React, { useCallback, useEffect, useRef } from "react";
import {
	Background,
	Container,
	Hero,
	HeroActions,
	HeroActionsPlay,
	HeroActionsList,
	Content,
	Title,
	Overview,
	Recommendation,
	Genres,
} from "./styles/modal";

export default function Modal({ children, ...props }) {
	console.log(props);
	const { setModal, modal } = props;
	const modalRef = useRef();

	const closeModalBgClick = (e) => {
		if (modalRef.current === e.target) {
			setModal((prevState) => ({
				...prevState,
				isOpen: !prevState.isOpen,
			}));
		}
	};

	const escapePress = useCallback((e) => {
		if (e.key === "Escape" && modal.isOpen) {
			setModal((prevState) => ({
				...prevState,
				isOpen: !prevState.isOpen,
			}));
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", escapePress);
		return () => document.removeEventListener("keydown", escapePress);
	}, [escapePress]);

	return (
		<Background ref={modalRef} onClick={closeModalBgClick} {...props}>
			<Container>{children}</Container>
		</Background>
	);
}

Modal.Hero = function ModalHero({ children, ...props }) {
	return (
		<Hero {...props}>
			<HeroActions>{children}</HeroActions>
		</Hero>
	);
};

Modal.HeroActionsPlay = function ModalHeroActionsPlay({ children, ...props }) {
	return <HeroActionsPlay {...props}>{children}</HeroActionsPlay>;
};

Modal.HeroActionsList = function ModalHeroActionsList({ children, ...props }) {
	return <HeroActionsList {...props}>{children}</HeroActionsList>;
};

Modal.Content = function ModalContent({ children, ...props }) {
	return <Content {...props}>{children}</Content>;
};

Modal.Title = function ModalTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Modal.Overview = function ModalOverview({ children, ...props }) {
	return <Overview {...props}>{children}</Overview>;
};

Modal.Recommendation = function ModalRecommendation({ children, ...props }) {
	return <Recommendation {...props}>{children}</Recommendation>;
};

Modal.Genres = function ModalGenres({ children, ...props }) {
	return <Genres {...props}>{children}</Genres>;
};
