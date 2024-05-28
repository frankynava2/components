import styled from "styled-components";
import { breakpoints } from "./utilities/Functions";
import { getFontSize } from "./utilities/Functions";
import { getVariant } from "./utilities/Functions";
import { getColor } from "./utilities/Functions";
import { getHoverBackground } from "./utilities/Functions";


export type ButtonProps = {
    $variant?: string; //primary, secondary, tertiary
    $size?: string; //small, medium, large
};

const Button = styled.button<ButtonProps>`
    background-color: ${props => getVariant(props.$variant)};
    font-size: ${props => getFontSize(props.$size)};
    color: ${props => getColor(props.$variant)};

    @media screen and (max-width: ${breakpoints.mobile}){
        font-size: ${getFontSize('small')};
    }

    @media screen and (max-width: ${breakpoints.tablet}){
        font-size: ${getFontSize('medium')};
    }

    @media screen and (max-width: ${breakpoints.tablet}){
        font-size: ${getFontSize('medium')};
    }

    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    &:hover{
        background-color: ${props => getHoverBackground(props.$variant)};
    }  
`;

export default Button;
