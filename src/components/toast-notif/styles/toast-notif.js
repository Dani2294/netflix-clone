import tw, { styled } from "twin.macro";

export const Toast = styled.div`
	${tw`
        w-2/4
        py-2
        px-4
        text-white
        text-center
        rounded-lg
        shadow-lg
    `}
	background-color: ${({ bg }) => bg};
`;
