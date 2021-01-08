// import React, { useState } from "react";
// import {SetColorStateContext, ColorStateContext} from '../components/context-provider'
// import { SketchPicker } from "react-color";

// const Button = () => {
//   const ChangeColor = React.useContext(SetColorStateContext)
//   return (
//     <button onClick={()=>{ChangeColor("blue")}}>change color</button>
//   )
// }
// const ColorPicker = () => {
//   // const [color, setColor] = useState();
//   const ChangeColor = React.useContext(SetColorStateContext)
//   const ColorState = React.useContext(ColorStateContext);
//   const handleChange = color => {
//     console.log(color);
//     ChangeColor(color.hex)
//   };
//   return (
//     <div style={{
//       marginTop: "20px",
//       marginBottom: "20px"
//     }}>
//       <SketchPicker color={ColorState} onChangeComplete={handleChange} />
//     </div>
//   );
// };

// const ColorDiv = () => {
//   const ColorState = React.useContext(ColorStateContext);
//   return (
//     <div style={{backgroundColor: ColorState}}>
//       I am a color
//     </div>
//   )
// }
// export default {
//     Button: Button,
//     ColorDiv: ColorDiv,
//     ColorPicker: ColorPicker
// }