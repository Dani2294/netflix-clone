import tw, { styled } from "twin.macro";

export const Background = styled.div`
	${tw`
        flex
        flex-col
        pt-8
    `}
	background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0,
			rgba(0, 0, 0, 0.4) 60%,
			rgba(0, 0, 0, 0.9) 100%
		),
		url(${({ src }) => (src ? src : "../assets/images/home-bg-recent.jpeg")})
			no-repeat 0% 20%/cover;
`;

export const Wrapper = styled.div`
	${tw`
        fixed
        top-0
        w-full
        flex
        justify-between
        items-center
        h-20
        px-4
        py-2
        gap-x-2
        transition
        duration-300

        lg:px-[2rem]
        2xl:py-8
    `}
	background: ${({ isDark }) => (isDark ? "#000" : "rgba(0, 0, 0, 0)")};
	z-index: ${({ isDark }) => (isDark ? "5" : "0")};
`;

export const Group = styled.div`
	${tw`
        flex
        items-center
    `}
	flex-shrink: 0;
`;

export const Logo = styled.img`
	${tw`
        h-[34px]
        w-[100px]  
        
        2xl:(h-[50px] w-[144px])
    `}
	flex-shrink: 0;
`;

export const TextLink = styled.span`
	${tw`
        inline-block
        text-white
        text-xl
        cursor-pointer
        transition
        pl-8
    `}
	&:hover, &.active {
		font-weight: bold;
	}
`;

export const Profile = styled.div`
	${tw`
        relative
        transition
        duration-500
    `}

	& > * {
		cursor: pointer;
	}

	&:hover > div,
	&:active > div {
		display: block;
	}
`;

export const ProfilePicture = styled.img`
	${tw`
        rounded
        h-[32px]
        w-[32px]
        bg-contain

        xl:(h-[42px] w-[42px])
    `}
	background: url(${({ src }) => src});
`;

export const DropDown = styled.div`
	${tw`
        hidden
        absolute
        top-[34px]
        right-0
        w-[160px]
        bg-[rgba(0,0,0,0.7)]
        text-white
        border
        border-[#333]


        xl:(top-[44px])
    `}

	& div {
		padding: 0.625rem;
		justify-content: space-between;

		&:hover {
			background-color: black;
		}
	}

	& div img {
		transform: scale(0.8);
	}
`;

export const DropDownText = styled.p`
	${tw`
        text-[1.2rem]
        hover:underline
        text-right
        ml-auto
    `}
`;

export const ButtonLink = styled.button`
	${tw`
        inline-block
        bg-[#e50914]
        whitespace-nowrap
        text-[16px]
        h-[fit-content]
        w-[84px]
        py-[5px] px-[14px]
        text-white
        rounded-[3px]
        border-none
        cursor-pointer

        hover:bg-[#f40612]
    `}
`;

export const Feature = styled.div`
	${tw`
            flex
            flex-col
            px-8
            pt-28
            pb-72
            text-white

            lg:(px-14 pt-40 pb-80 max-w-2xl)
            2xl:(max-w-5xl)
        `}
`;

export const FeatureTitle = styled.h1`
	${tw`
            text-5xl
            font-bold

            2xl:text-7xl
        `}
`;

export const FeatureText = styled.p`
	${tw`
            text-xl
            font-medium
            my-6
            leading-[1.5]

            2xl:(text-2xl my-8)
        `}
	text-shadow: 0 2px 1px 2px rgba(0,0,0,0.9)
`;

export const FeatureButtons = styled.div`
	${tw`
            space-x-4
        `}
`;

export const FeatureButton = styled.button`
	${tw`
            cursor-pointer
            font-bold
            rounded
            px-8
            py-2
            mt-2
            text-[1.25rem]
            transition

            hover:opacity-70
    `}
	background-color: ${({ playBtn }) =>
		playBtn ? "white" : "rgba(109, 109, 110, 0.7)"};
	color: ${({ playBtn }) => (playBtn ? "black" : "white")};
`;
