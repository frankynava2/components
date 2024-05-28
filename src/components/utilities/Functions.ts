import { ButtonProps } from "../CustomButton";

export const getFontSize = (size: ButtonProps['$size']) => {
    if (!size) { size = 'medium' }
    const sizeLowerCase = size.toLowerCase();

    switch (sizeLowerCase) {
        case 'small': return '12px';
        case 'medium': return '18px';
        case 'large': return '24px';
        default: return '18px';
    }
};

export const getVariant = (variant: ButtonProps['$variant']) => {
    const varientLowerCase = variant?.toLowerCase() || 'primary';

    switch (varientLowerCase) {
        case 'primary': return '#007FFF';
        case 'secondary': return '#4C516D';
        case 'tertiary': return '#9e1b32';
        default: return 'black';
    }
};

export const getColor = (variant: ButtonProps['$variant']) => {
    if (!variant) { variant = 'primary' }
    const variantColorLowerCase = variant?.toLowerCase() || 'primary';

    switch (variantColorLowerCase) {
        case 'primary': return 'white';
        case 'secondary': return 'white';
        case 'tertiary': return 'white';
        default: return 'white';
    }
}


export const getHoverBackground = (variant: ButtonProps['$variant']) => {
    if (!variant) { variant = 'primary' }
    const variantColorLowerCase = variant?.toLowerCase() || 'primary';

    switch (variantColorLowerCase) {
        case 'primary': return '#0072E5';
        case 'secondary': return '#434863';
        case 'tertiary': return '#7a1429';
        default: return 'black';
    }
}

export const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
}