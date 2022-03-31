import React from "react";
import { useSpring, animated } from "react-spring";
import { Toast } from "./styles/toast-notif";

export default function ToastNotif({ children, ...props }) {
	const propsSpring = useSpring({
		from: { translateY: -100 },
		to: { translateY: 0 },
	});
	const styling = {
		position: "fixed",
		top: "12px",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		zIndex: "100",
	};
	return (
		<animated.span
			style={{
				...propsSpring,
				...styling,
			}}>
			<Toast {...props}>{children}</Toast>
		</animated.span>
	);
}
