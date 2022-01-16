import { useState, useEffect, useContext } from 'react'
import OfficesContext from '../Context/OfficesContext'
import getOffices from '../Services/getOffices'

export function useOffices() {
    const [loading, setLoading] = useState(false)
    const { offices, setOffices, search, step } = useContext(OfficesContext)
    console.log('steppp', step)
    useEffect(() => {
        setLoading(true)
        getOffices({ search, step }).then(res => {
            setOffices(res)
            setLoading(false)
        })
    }, [search, step])

    return { loading, offices }
}
