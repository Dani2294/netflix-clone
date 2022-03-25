import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Wrapper, Text, CloseBtn } from "./styles/player-wrapper";

export default function PlayerWrapper({ ...props }) {
	const [showClose, setShowClose] = useState(true);
	const { urlKey, showPlayer, setShowPlayer } = props;
	//console.log(props);
	return (
		<Wrapper className="player-wrapper" {...props}>
			{urlKey ? (
				<ReactPlayer
					onPause={() => setShowClose(!showClose)}
					onPlay={() => setShowClose(!showClose)}
					onEnded={() => setShowPlayer(false)}
					url={`https://www.youtube.com/watch?v=${urlKey}`}
					config={{
						youtube: {
							autoplay: 1,
							controls: 2,
							modestbranding: 1,
							playsinline: 1,
							rel: 0,
						},
					}}
					width="100%"
					height="100%"
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						overscrollBehavior: "none",
					}}
					playing={true}
					controls={true}
				/>
			) : (
				<>
					<Text>No video to show yet</Text>
					<CloseBtn
						onClick={() => setShowPlayer(!showPlayer)}
						className="close-btn"
						{...props}>
						<img src="/assets/icons/add.png" alt="remove from my list" />
					</CloseBtn>
				</>
			)}
			{showClose && (
				<CloseBtn
					onClick={() => setShowPlayer(!showPlayer)}
					className="close-btn"
					{...props}>
					<img src="/assets/icons/add.png" alt="remove from my list" />
				</CloseBtn>
			)}
		</Wrapper>
	);
}
