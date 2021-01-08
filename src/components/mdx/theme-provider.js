/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '@theme-ui/preset-funk'
import React from 'react'

export default (props) => {
    return (
    <ThemeProvider theme={theme}>
        <div>
            <h1
                sx={{
                    fontFamily: "heading",
                    mt: 6
                }}
            >this is my test!</h1>
            {props.children}
        </div>
    </ThemeProvider>
    )
}