import tw, { styled } from "twin.macro";

export const Container = styled.div``;

export const Inner = styled.div`
	${tw`
        flex
        flex-col
        py-[70px] px-[5%]
        max-w-[815px]
        mx-auto

        lg:px-[45px]
    `}
`;

export const Title = styled.h2`
	${tw`
        text-[35px]
        text-white
        leading-[1.1]
        font-bold
        text-center
        mb-2

        md:text-[50px]
    `}
`;

export const List = styled.ul`
	${tw`
        list-none
        my-[2em]
        w-[100%]
    `}
`;

export const Item = styled.li`
	${tw`
        block
        mb-2.5

        last:mb-0
    `}
`;

export const Button = styled.div`
	${tw`
        border-none
        flex
        justify-between
        items-center
        cursor-pointer
        text-base
        text-white
        bg-[#303030]
        py-[0.8em] px-[1.2em]
        mb-px
        select-none

        md:text-[26px]
    `}

	img {
		filter: brightness(0) invert(1);
		width: 24px;
		user-select: none;

        @media (max-width: 600px) {
            width: 16px;
	}
`;

export const Body = styled.div`
	${tw`
        text-base
        text-white
        font-normal
        leading-[1.2]
        bg-[#303030]
        whitespace-pre-wrap
        select-none
        overflow-hidden

        md:text-[26px]
    `}
	p {
		display: block;
		padding: 1.2em;
	}
`;
