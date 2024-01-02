// import { useState } from "react"
// import { useEffect } from "react"

// //  it is a custom hook 

// function useCurrencyinfo(currency) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         // api call
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             //  response (res) convert into json 
//             .then((res) => res.json())
//             // now res come in json format
//             .then(res) = setData(res[currency])
//         // currency is a key value.
//         console.log(data);

//     }, [currency])
//     console.log(data);

//     return data

// }

// export default useCurrencyinfo;

import { useEffect, useState } from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
