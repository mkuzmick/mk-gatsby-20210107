import React from "react"
import { MDXProvider } from "@mdx-js/react"
import SketchPicker from "./sample-components/color-picker/sketch"
import SimpleKeyboard from "./sample-components/piano/simple-keyboard"
import SuperBigHeadline from "./sample-components/ui/super-big-headline"
import CanvasDraw from "react-canvas-draw"

const shortcodes = { SketchPicker, SimpleKeyboard, SuperBigHeadline, CanvasDraw }

export default function MDXLayout ({ children }) {
  return (
    <MDXProvider components={shortcodes}>
      <div style={{
        width: "80%",
        margin: "auto",
        marginTop: "3em"
      }}>
        {children}
      </div>
    </MDXProvider>
  )
}