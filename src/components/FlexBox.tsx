import { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints } from "./utilities/Functions";

//props passed in component
type FlexBoxProps = {
    $justifyContent?: 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    $alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between';
    $alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline'
    $flexDirection?: 'column' | 'row-reverse' | 'column-reverse' | 'row';
    $borderRadius?: string;
    $border?: string;
    $backgroundColor?: string;
    $gap?: string;
    $flex?: string;
    $padding?: string;
    $margin?: string;
    $height?: string;
    $width?: string;
    children?: ReactNode;
}

//take our props and populate, else default
// generic FlexBoxProp type 
const FlexBox = styled.div<FlexBoxProps>`
    display: flex;
    border-radius: ${props => props.$borderRadius || 'none'};
    background-color: ${props => props.$backgroundColor || 'white'};
    border: ${props => props.$border || 'none'};
    justify-content: ${props => props.$justifyContent || 'flex-start'};
    align-items: ${props => props.$alignItems || 'stretch'};
    flex-direction: ${props => props.$flexDirection || 'row'};
    gap: ${props => props.$gap || 'normal'};
    flex: ${props => props.$flex || '0 1 auto'};
    padding: ${props => props.$padding || '0'};
    margin: ${props => props.$margin || '0'};
    height: ${props => props.$height || 'auto'};
    width: ${props => props.$width || 'auto'};
    overflow: auto;
    

    @media screen and (max-width: ${breakpoints.mobile}){
        flex-direction: column;
        margin: 0 1rem;
    }

    @media screen and (max-width: ${breakpoints.tablet}){
        margin: 0 1.5rem;

    }

    @media screen and (max-width: ${breakpoints.desktop}){
        margin: 0 2rem;
    }

`;

export default FlexBox;


