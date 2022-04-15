import React from "react";

export const themes = {
    ligth: {
        color: "#000000",
        background: "#ffffff"
    },
    dark: {
        color: "#a7bdd2",
        background: "#eefafe"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.ligth,
    toggleTheme: () => {}
})

ThemeContext.displayName = "ThemeContext";