import styled from "styled-components";
import { getFontSize } from "./utilities/Functions";
import { breakpoints } from "./utilities/Functions";

//allows us to inherit all html attributes
type TypographyProps = {
    $color?: string;
    $size?: string; //small, medium, large
}

const Typography = styled.p<TypographyProps>`
    font-size: ${props => getFontSize(props.$size)};
    color: ${props => props.$color || 'black'};

    @media screen and (max-width: ${breakpoints.mobile}){
        font-size: ${getFontSize('small')};
    }

    @media screen and (max-width: ${breakpoints.tablet}){
        font-size: ${getFontSize('medium')};
    }

    @media screen and (max-width: ${breakpoints.desktop}){
        font-size: ${getFontSize('medium')};
    }
`;

export default Typography;