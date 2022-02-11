export interface ACTION {
  type: string;
  mutation: object;
  mode: boolean;
}

export interface REDUX_STATE {
  isLoading: boolean;
  errorMessage: string;
  colors: object;
  isDarkMode: boolean;
}

export interface COLORS {
    text_color?: string;
    text_color_inverted?: string;
    p_color_1?: string;
}

export interface CSS_ROOT {
    style: {
        setProperty: null
    }
}