import { useContext } from 'react'
import OfficesContext from '../Context/OfficesContext'

export default function useListOffices() {
    const { offices } = useContext(OfficesContext)
    return offices
}
