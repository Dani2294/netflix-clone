import { AnimatePresence } from "framer-motion";
import React from "react";
import { Toast } from "./styles/toast-notif";

export default function ToastNotif({ children, ...props }) {
	const toastVariant = {
		hidden: { opacity: 0, y: -100, x: "50%" },
		visible: { opacity: 1, y: 20, x: "50%" },
	};
	return (
		<AnimatePresence exitBeforeEnter>
			<Toast
				variants={toastVariant}
				initial="hidden"
				animate="visible"
				exit="hidden"
				{...props}>
				{children}
			</Toast>
		</AnimatePresence>
	);
}
