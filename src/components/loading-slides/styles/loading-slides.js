import tw, { styled } from "twin.macro";

export const Container = styled.div`
	${tw`
        mx-4
        lg:mx-[3.5rem]
    `}
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 15px;

	@media (min-width: 1000px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;

export const Card = styled.div`
	${tw`
        rounded-lg
        bg-[#222]
        w-full
        h-[300px]
        animate-pulse
    `}
`;
