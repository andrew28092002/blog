import {useState, useEffect} from 'react'

const useFetch = (url, updateFlag) =>{

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const controller = new AbortController()

        fetch(url, {signal: controller.signal}).then((res) => {

            if (res.ok !== true){
                throw Error('Could not fetch the data from this resourse')
            }

            return res.json()

        }).then((data) => {

            setData(data)
            setLoading(false)
            setError(null)

        }).catch((err) => {

            if (err.name === 'AbortError'){
                console.log('fetch aborted')
            } else{
                setError(err.message)
                setLoading(false)
            }

        })

        return () =>{
            controller.abort()
        }
        
    }, [updateFlag])

    return {error, data, isLoading}
}

export default useFetch