import React from "react";
import ReactPlayer from "react-player/youtube";
import { Wrapper, CloseBtn } from "./styles/player-wrapper";

export default function PlayerWrapper({ children, ...props }) {
	const { urlKey } = props;
	return (
		<Wrapper className="player-wrapper" {...props}>
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${urlKey}`}
				width="100%"
				height="90%"
				style={{
					position: "absolute",
					top: "0",
					left: "0",
				}}
				playing={true}
			/>
			{children}
		</Wrapper>
	);
}

PlayerWrapper.CloseBtn = function PlayerWrapperCloseBtn({
	children,
	...props
}) {
	return (
		<CloseBtn className="close-btn" {...props}>
			{children}
		</CloseBtn>
	);
};
