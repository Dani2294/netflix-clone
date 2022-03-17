import tw, { styled } from "twin.macro";

export const Container = styled.div`
	${tw`
        md:(mx-auto bg-transparent max-w-[450px] min-h-[90vh])
    `}
`;

export const Wrapper = styled.div`
	${tw`
        flex
        flex-col
        py-[25px]
        bg-[rgba(0,0,0,0.7)]
        px-[45px]
        min-h-[550px]

        md:(pt-[60px] px-[68px] pb-[0px] rounded)
        md:after:(content-[""] h-[150px] block)
    `}
`;

export const Title = styled.h1`
	${tw`
        mb-[20px]
        text-[32px]
        font-bold
        text-white
    `}
`;

export const Main = styled.form`
	${tw`
        flex
        flex-col
        w-full
    `}
`;

export const Input = styled.input`
	${tw`
        bg-[#333]
        rounded
        text-white
        h-[50px]
        leading-[50px]
        py-[5px] px-[20px]
        mb-[1rem]
        border-none
        border-b-2
        border-red-500
    `}
`;

export const Submit = styled.button`
	${tw`
        bg-[#e50914]
        rounded
        w-full
        py-4
        mt-[24px] mb-[12px]
        text-base
        font-bold
        cursor-pointer
        text-white

        disabled:(opacity-50 cursor-not-allowed)
    `}
`;

export const Other = styled.div`
	padding-top: 1rem;
`;

export const Text = styled.p`
	${tw`
        text-[#737373]
        font-medium
    `}
`;

export const Link = styled.span`
	${tw`
        cursor-pointer
        text-white

        hover:underline
    `}
`;

export const TextSmall = styled.p`
	${tw`
        mt-2.5
        text-[13px]
        text-[#8c8c8c]
    `}

	& > a {
		color: #0071eb;

		&:hover {
			text-decoration: underline;
		}
	}
`;
