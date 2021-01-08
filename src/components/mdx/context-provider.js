import React from 'react'

export const ColorStateContext = React.createContext();
export const SetColorStateContext = React.createContext();

export default ({ children }) => {
    const [colorState, setColorState] = React.useState("blue");
    return (
      <ColorStateContext.Provider value={colorState}>
        <SetColorStateContext.Provider value={setColorState}>
            {children}
        </SetColorStateContext.Provider>
    </ColorStateContext.Provider>
    )
}