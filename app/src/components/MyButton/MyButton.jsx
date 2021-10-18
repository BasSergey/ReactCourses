import React, { useState } from 'react';
import './MyButton.css';

const MyButton = (props) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <button className="ok" onClick={() => setCount(console.log("Ok"))} >
                OK
            </button>
            <button className="cancel" onClick={() => setCount(console.log("Cancel"))} >
                Cancel
            </button>
        </>
    )
}

export default MyButton;
