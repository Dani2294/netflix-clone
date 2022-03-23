import tw, { styled } from "twin.macro";

export const Container = styled.div`
	${tw`
        mb-52
        -mt-40

        lg:(mb-56 -mt-40)
    `}

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const Title = styled.h2`
	${tw`
        text-2xl
        text-white
        font-bold
        capitalize
        mx-6

        lg:mx-14
        2xl:text-4xl
    `}
`;

export const Row = styled.div`
	${tw`
        flex
        mt-5
        py-2
        px-6
        space-x-3
        overflow-x-scroll
        overflow-y-hidden

        lg:px-14
    `}

	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Card = styled.div`
	${tw`
        relative
        transition
        duration-500
        cursor-pointer
        rounded
        h-[350px]
        overflow-hidden

        lg:h-auto
    `}
	flex-shrink: 0;

	&:hover,
	&:active,
	&:focus {
		transform: scale(1.05);

		& > div {
			transform: translateY(0px);
		}
	}
`;

export const Image = styled.img`
	${tw`
        max-w-none
    `}
`;

export const Meta = styled.div`
	${tw`
        flex
        flex-col
        absolute
        bottom-0
        left-0
        right-0
        min-h-[45%]
        w-full
        text-white
        pt-2
        px-4
        pb-10
        transition
        duration-500

        lg:h-[40%]
    `}
	background: rgb(0,0,0);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.98) 80%,
		rgba(255, 255, 255, 0) 100%
	);
	transform: translateY(105%);
`;

export const MetaHeader = styled.div`
	${tw`
            flex
            items-center
            justify-between
            w-full
        `}
`;

export const MetaTitle = styled.h3`
	${tw`
            text-lg
            font-bold
            leading-[1.1]
            flex-1
        `}
`;

export const MetaButtons = styled.div`
	${tw`
            flex
            flex-nowrap
            space-x-2
            ml-2
        `}
	flex-shrink: 0;
`;

export const MetaButton = styled.div`
    ${tw`
        flex
        items-center
        justify-center
        rounded-full
        p-2
        border-2
        border-white
        bg-transparent
        transition
        cursor-pointer

        hover:bg-[rgba(255,255,255, 0.2)]
    `}

    transform: rotate(${({ rotate }) => rotate && rotate});

    & > img {
		filter: brightness(0) invert(1);
		width: 16px;
		user-select: none;

        @media (max-width: 600px) {
            width: 9px;
	}
`;

export const MetaDescription = styled.p`
	${tw`
        text-sm
        my-4
        
        leading-[1.2]
    `}
`;

export const MetaRecommendation = styled.p`
	${tw`
        text-xl
        text-[#46d369]
        font-bold
    `}
`;
