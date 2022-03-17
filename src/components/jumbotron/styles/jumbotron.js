import tw, { styled } from "twin.macro";

export const Item = styled.div`
	${tw`
        flex
        py-[50px] px-[5%]
        text-white
        overflow-hidden

        sm:(py-[70px] px-[45px])
    `}
`;

export const Inner = styled.div`
	${tw`
        flex
        flex-col
        items-center
        justify-between
        max-w-[1100px]
        mx-auto
        w-full
        h-full

    `};

	@media (min-width: 1024px) {
		flex-direction: ${({ direction }) => direction};
	}
`;

export const TextBox = styled.div`
	${tw`
        w-full
        h-full
        p-0
        flex-initial
        text-center

        lg:(w-[52%] pr-12 text-left)
    `}

	@media (min-width: 1024px) {
		&:nth-of-type(odd) {
			padding-right: 2.5rem;
		}
	}
`;

export const Title = styled.h2`
	${tw`
        text-[35px]
        leading-[1.1]
        mb-6
        font-bold

        sm:text-[50px]
    `}
`;

export const SubTitle = styled.h2`
	${tw`
        text-[18px]
        leading-normal
        font-normal

        sm:text-[26px]
    `}
`;

export const ImageBox = styled.div`
	${tw`
        mt-4
        flex-initial

        md:(w-[48%] mt-0)
    `}
`;

export const Image = styled.img`
	margin: auto;
`;

export const Container = styled.div``;
