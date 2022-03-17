import React, { useState, useContext, createContext } from "react";
import {
	Container,
	Inner,
	Title,
	List,
	Item,
	Button,
	Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...props }) {
	return (
		<Container className="home-bottom-border" {...props}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({ children, ...props }) {
	return <Title {...props}>{children}</Title>;
};

Accordion.List = function AccordionList({ children, ...props }) {
	const [toggleItem, setToggleItem] = useState({
		id: null,
		toggled: false,
	});
	return (
		<ToggleContext.Provider value={{ toggleItem, setToggleItem }}>
			<List {...props}>{children}</List>
		</ToggleContext.Provider>
	);
};

Accordion.Item = function AccordioItem({ children, ...props }) {
	return <Item {...props}>{children}</Item>;
};

Accordion.Button = function AccordionButton({ children, ...props }) {
	const { toggleItem, setToggleItem } = useContext(ToggleContext);
	const show = () => {
		if (toggleItem.toggled && toggleItem.id === props.itemID) {
			return true;
		} else {
			return false;
		}
	};

	const handleToggle = () => {
		setToggleItem((prevState) => {
			return {
				...prevState,
				id: props.itemID,
				toggled:
					prevState.id !== props.itemID
						? true
						: prevState.id === props.itemID
						? !prevState.toggled
						: false,
			};
		});
	};

	return (
		<Button onClick={handleToggle} {...props}>
			{children}
			{show() ? (
				<img src="/assets/icons/close-slim.png" alt="Close" />
			) : (
				<img src="/assets/icons/add.png" alt="Open" />
			)}
		</Button>
	);
};

Accordion.Body = function AccordionBody({ children, ...props }) {
	const { toggleItem } = useContext(ToggleContext);
	const show = () => {
		if (toggleItem.toggled && toggleItem.id === props.itemID) {
			return true;
		} else {
			return false;
		}
	};

	return show() ? (
		<Body {...props}>
			<p>{children}</p>
		</Body>
	) : null;

	/* return (
		<Body className={toggleItem.toggled ? "open" : "closed"} {...props}>
			<p>{children}</p>
		</Body>
	); */
};
