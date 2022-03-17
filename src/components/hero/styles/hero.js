import tw, { styled } from "twin.macro";

export const Container = styled.div`
	${tw`
        flex
        flex-col
        items-center
        py-[160px] px-[45px]
        text-center
    `}
`;

export const Title = styled.h1`
	${tw`
        text-[1.75rem]
        text-white
        font-bold
        max-w-[640px]
        mx-auto
        leading-[1.1]

        sm:text-[3.125rem]
        xl:text-[4rem]
    `}
`;

export const SubTitle = styled.h2`
	${tw`
        text-lg
        text-white
        max-w-[640px]
        my-4 mx-auto
        font-normal

        sm:text-[1.625rem]
    `}
`;
