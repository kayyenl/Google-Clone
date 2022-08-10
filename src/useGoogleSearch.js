import React, { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = '67d2ea1c791314d6c'
// the context key above tells google which search engine to be using.
// the one we created above searches the entire web.


// for the bottom custom hook, it will be called when the 
// term variable is being pushed into the data layer. Then
// due to the change in term, being one of the dependencies of 
// useeffect, it will trigger the function written inside of useeffect.
const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {

    }, [term])
}

export default UseGoogleSearch;
