import tw, { styled } from "twin.macro";

export const Container = styled.footer`
	${tw`
        flex
        flex-col
        max-w-[1000px]
        mx-auto
        py-[50px] px-[45px]
        text-[#757575]

        lg:(py-[70px] px-[5px])
    `}
`;

export const Title = styled.p`
	${tw`
        text-base
        mb-[30px]
    `}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 15px;

	@media (min-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	}
`;

export const Column = styled.ul`
	${tw`
        flex
        flex-col
        p-0
        m-0
        mt-4
        space-y-[20px]
    `}
`;

export const Item = styled.li`
	font-size: 13px;
`;

export const Link = styled.a`
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const Text = styled.p`
	font-size: 16px;
	margin-top: 40px;
`;
