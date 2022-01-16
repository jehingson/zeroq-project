import { useState, useEffect, useContext } from 'react'
import OfficesContext from '../Context/OfficesContext'
import getOffices from '../Services/getOffices'

export function useOffices() {
    const [loading, setLoading] = useState(false)
    const { offices, setOffices } = useContext(OfficesContext)

    useEffect(() => {
        setLoading(true)
        getOffices().then(res => {
            setOffices(res)
            setLoading(false)
        })
    }, [])

    return { loading, offices }
}
