import React, { useState } from 'react'

const NewNavbar = () => {
  const [buttonText, setButtonText] = useState('Click me please!')

  return (
    <button onClick={() => setButtonText('Thanks, been clicked!')}>
    {buttonText}
    </button>
  )
}

export default NewNavbar