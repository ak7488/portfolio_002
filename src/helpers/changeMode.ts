

const changeMode = (isDarkMode:boolean) => {
    let colors:any;
    if(isDarkMode) {
        colors = {
            text_color_inverted: 'black',
            text_color: "whitesmoke",
            p_color_1: "green",
            background_1: "#0f0f11"
        }
    } else {
        colors = {
            text_color_inverted: 'whitesmoke',
            text_color: "black",
            p_color_1: "#ff4444",
            background_1: "whitesmoke"
        }
    }
    localStorage.setItem('colors', JSON.stringify(colors));
    const cssRoot = document.querySelector<HTMLElement>(':root');
    for (let color in colors) {
        cssRoot?.style?.setProperty(`--${color}`, colors[color]);
    }
    return colors;
}

export default changeMode