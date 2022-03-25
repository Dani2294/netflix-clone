import tw, { styled } from "twin.macro";

export const Wrapper = styled.div`
	${tw`
        fixed
        inset-0
        w-full
        h-full
        bg-black
        z-[100]
        overflow-y-hidden
        overscroll-none
    `}
`;

export const CloseBtn = styled.div`
	${tw`
        absolute
        top-[65px]
        right-[50%]
        z-50
        rounded-full
        p-2
        border-2
        border-white
        bg-transparent
        cursor-pointer
        transition
        duration-300
    `}
    transform: translate(50%) rotate(45deg);
	& > img {
		filter: brightness(0) invert(1);
		width: 30px;
		user-select: none;

        @media (max-width: 600px) {
            width: 22px;
	}
`;

export const Text = styled.h1`
	${tw`
        text-white
        text-5xl
        font-bold
        text-center
        mt-[40%]
        px-4
    `}
`;
