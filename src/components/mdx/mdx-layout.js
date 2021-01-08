import React from "react"
import { MDXProvider } from "@mdx-js/react"
// import SketchPicker from "./sample-components/color-picker/sketch"
import SimpleKeyboard from "./sample-components/piano/simple-keyboard"
import SuperBigHeadline from "./sample-components/ui/super-big-headline"
import CanvasDraw from "react-canvas-draw"
import ThemeProvider from "./theme-provider"
import ContextProvider from "./context-provider"
import MdxComponents from "./mdx-components"
import {SetColorStateContext, ColorStateContext} from './context-provider'
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  // const [color, setColor] = useState();
  const ChangeColor = React.useContext(SetColorStateContext)
  const ColorState = React.useContext(ColorStateContext);
  const handleChange = color => {
    console.log(color);
    ChangeColor(color.hex)
  };
  return (
    <div style={{
      marginTop: "20px",
      marginBottom: "20px"
    }}>
      <SketchPicker color={ColorState} onChangeComplete={handleChange} />
    </div>
  );
};

const ColorDiv = () => {
  const ColorState = React.useContext(ColorStateContext);
  return (
    <div style={{backgroundColor: ColorState}}>
      I am a color
    </div>
  )
}

const ColorHeadline = ({children}) => {
  const ColorState = React.useContext(ColorStateContext);
  return (
    <div style={{color: ColorState, fontSize: "200px"}}>
      {children}
    </div>
  )
}

const shortcodes = { SketchPicker, SimpleKeyboard, SuperBigHeadline, CanvasDraw, ColorPicker, ColorDiv, ColorHeadline }

export default function MDXLayout ({ children }) {
  return (
      <ContextProvider>
        <MDXProvider components={shortcodes}>
          <div style={{
            width: "80%",
            margin: "auto",
            marginTop: "3em"
          }}>
            {children}
          </div>
        </MDXProvider>
      </ContextProvider>
  )
}