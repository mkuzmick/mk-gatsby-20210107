import React from 'react'

export default () => {
    const color = React.useContext(ColorStateContext)
    return (
      <div>
        {color}
      </div>
    )
  }