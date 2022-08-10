import React, { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = '67d2ea1c791314d6c'
// the context key above tells google which search engine to be using.
// the one we created above searches the entire web.


// for the bottom custom hook, it will be called when the 
// term variable is being pushed into the data layer. Then
// due to the change in term, being one of the dependencies of 
// useeffect, it will trigger the function written inside of useeffect.
// this will then give u the search result to be displayed in the page
const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            const fetchJson = await result.json()
            setData({fetchJson})
        }

        fetchData()

    }, [term])

    return { data }
}

export default UseGoogleSearch;
