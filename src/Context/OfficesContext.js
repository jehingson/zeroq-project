import React, { useState } from 'react'

const Context = React.createContext({})

export function OfficesContextProvider({ children }) {
    const [offices, setOffices] = useState([])
    const [search, setSearch] = useState('')
    const [step, setStep] = useState('')

    return <Context.Provider
        value={{
            offices,
            setOffices,
            search,
            setSearch,
            step,
            setStep,
        }}>
        {children}
    </Context.Provider>
}


export default Context