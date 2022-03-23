import tw, { styled } from "twin.macro";
import { MetaButton } from "../../slides/styles/slides";

export const Wrapper = styled.div`
	${tw`
        fixed
        inset-0
        pt-[56.25%]
        w-full
        h-full
        bg-black
    `}
`;

export const CloseBtn = styled(MetaButton)`
	${tw`
        absolute
        top-[20px]
        right-[50%]
        translate-x-1/2
        z-50
        border-2
        border-white
        rounded-full
        p-1.5
    `}
	transform: rotate(45deg);
	width: 40px;

	@media (max-width: 600px) {
		width: 30px;
	}
`;
