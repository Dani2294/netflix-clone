import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const Toast = styled(motion.div)`
	${tw`
        fixed
        w-full
        max-w-[50%]
        mx-auto
        text-center
        py-2
        px-4
        text-white
        text-center
        rounded-lg
        shadow-lg
        z-50
    `}
	background-color: ${({ bg }) => bg};
`;
