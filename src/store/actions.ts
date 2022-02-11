export const CHANGE = 'CHANGE';
export const CHANGE_MODE = 'CHANGE_MODE';
export const CHANGE_COLORS = 'CHANGE_COLORS';

export const change = (mutation:object) => {
    return {
        type: CHANGE,
        mutation
    }
}

export const changeMode = (mode: boolean) => {
    return {
        type: CHANGE_MODE,
        mode
    }
};

export const changeColors = (colors: object) => {
    return {
        type: CHANGE_COLORS,
        colors
    }
}