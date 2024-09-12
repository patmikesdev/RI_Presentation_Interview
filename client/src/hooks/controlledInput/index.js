// ATTRIBUTION
// THE FOLLOWING CODE is adapted from the book Learning React, by Alex Banks and Eve Porcello

import { useState } from 'react'

// This custom hook simplifies the process of "controlling" the values of inputs at all times in React Forms
// it returns an array with two elements
// the first element is an object with two properties
    // the first property, "value" is a piece of react state representing the most current value of the input field
    // the second property, an anonymous function, is an event handler attached to the input tag that automatically updates the react state whenever a change in the input is detected
// the second element in the array is another anonymous function that is simply used to reset the value to it's initial state (say upon submission of the form)

export default function useControlledInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: (e) => setValue(e.target.value) },
        () => setValue(initialValue) //resetter
    ]
}