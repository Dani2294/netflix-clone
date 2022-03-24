import React, { useCallback, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import {
	Background,
	Container,
	CloseWrapper,
	CloseBtn,
	Hero,
	HeroActions,
	HeroActionsPlay,
	HeroActionsList,
	Content,
	Title,
	Overview,
	Recommendation,
	Genres,
	ReleaseDate,
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

	const propsSpring = useSpring({
		from: { scale: 0 },
		to: { scale: 1 },
		config: { duration: 350 },
	});

	return (
		<Background ref={modalRef} onClick={closeModalBgClick} {...props}>
			<animated.div style={{ ...propsSpring }}>
				<Container>{children}</Container>
			</animated.div>
		</Background>
	);
}

Modal.CloseBtn = function ModalCloseBtn({ children, ...props }) {
	return (
		<CloseWrapper>
			<CloseBtn {...props}>{children}</CloseBtn>
		</CloseWrapper>
	);
};

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

Modal.ReleaseDate = function ModalReleaseDate({ children, ...props }) {
	return <ReleaseDate {...props}>{children}</ReleaseDate>;
};
