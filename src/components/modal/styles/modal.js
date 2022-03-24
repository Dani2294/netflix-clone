import tw, { styled } from "twin.macro";
import { FeatureButton } from "../../header/styles/header";
import { MetaButton } from "../../slides/styles/slides";

export const Background = styled.div`
	${tw`
        flex
        justify-center
        fixed
        inset-0
        h-full
        w-full
        bg-black
        bg-opacity-75
        overflow-y-scroll
        px-2
    `}
`;

export const Container = styled.div`
	${tw`
        relative
        max-w-[1024px]
        w-full
        mx-auto
        mt-10
        grid
        grid-rows-2
        rounded
        bg-black

        lg:mx-4
    `}
`;

export const CloseWrapper = styled.div`
	${tw`
        absolute
        top-0
        right-0
        bg-black
        bg-opacity-20
        flex
        items-center
        justify-between
        p-3
        z-10
    `}
`;

export const CloseBtn = styled(MetaButton)`
	transform: rotate(45deg);
	width: 30px;

	@media (max-width: 600px) {
		width: 20px;
	}
`;

export const Hero = styled.div`
	${tw`
        relative
        h-full
        rounded-t-lg
    `}
	flex-shrink: 0;
	background: linear-gradient(
			to top,
			rgba(0, 0, 0, 1) 0,
			rgba(0, 0, 0, 0.85) 20%,
			rgba(0, 0, 0, 0) 100%
		),
		url(${({ src }) => src && src}) no-repeat 0% 20% / cover;
`;

export const HeroActions = styled.div`
	${tw`
        flex
        items-center
        space-x-8
        absolute
        left-0
        bottom-20
        w-full
        px-4

        lg:px-8
    `}
`;

export const HeroActionsPlay = styled(FeatureButton)``;

export const HeroActionsList = styled(MetaButton)`
	width: 20px;

	@media (max-width: 600px) {
		width: 16px;
	}
`;

export const Content = styled.div`
	${tw`
        px-5
        py-12
        text-white
        overflow-y-scroll
        overflow-x-hidden

        lg:px-8
    `}
`;

export const Title = styled.h3`
	${tw`
        text-3xl
        font-bold
        leading-[1.1]
        flex-1

        lg:text-5xl
    `}
`;

export const Overview = styled.p`
	${tw`
        text-lg
        mt-10
        mb-8
        text-[rgba(255,255,255,0.85)]
        leading-[1.6]

        lg:(text-2xl max-w-[80%])
    `}
`;

export const Recommendation = styled.p`
	${tw`
        text-xl
        text-[#46d369]
        font-bold

        lg:text-2xl
    `}
`;

export const Genres = styled.div`
	${tw`
        text-[rgba(255,255,255,0.6)]
        text-lg
        font-bold
        mt-4
    `}
`;

export const ReleaseDate = styled.p`
	${tw`
        text-[rgba(255,255,255,0.6)]
        text-lg
        font-bold
        mb-4
    `}
`;
