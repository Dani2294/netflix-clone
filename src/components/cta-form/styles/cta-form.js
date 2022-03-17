import tw, { styled } from "twin.macro";

export const Container = styled.form`
	${tw`
        flex
        flex-col
        justify-center
        items-center
        flex-wrap
        mx-auto
        max-w-[950px]
        pt-[14px]

        lg:flex-row
    `}
`;

export const Text = styled.h3`
	${tw`
        text-white
        text-lg
        text-center
        px-[5%]
        pb-[20px]
        max-w-[450px]
        mx-auto
        leading-5

        sm:px-[10%]
        lg:(max-w-none text-[19.2px] px-[5%] leading-normal)
    `}
`;

export const Frame = styled.div`
	${tw`
        text-center
        w-full
        lg:(flex mx-auto max-w-[700px])
    `}
`;

export const Input = styled.input`
	${tw`
        flex-1
        w-full
        mx-auto
        border-none
        p-2.5
        h-[50px]

        sm:(h-[60px])
    `}
`;

export const Button = styled.button`
	${tw`
        flex
        items-center
        mt-5
        font-bold
        h-[50px]
        bg-[#e50914]
        text-white
        px-8
        text-base
        border-none
        cursor-pointer
        mx-auto

        hover:bg-[#f40612]
        lg:(h-[60px] text-[26px] mt-0 mx-0 font-normal border-l border-[#333])
    `}

	img {
		margin-left: 10px;
		margin-top: 3px;
		filter: brightness(0) invert(1);
		width: 18px;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}
`;
