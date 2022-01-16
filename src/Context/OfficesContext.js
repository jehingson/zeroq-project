import React, { useState } from 'react'

const Context = React.createContext({})

export function OfficesContextProvider({ children }) {
    const [offices, setOffices] = useState([])

    return <Context.Provider value={{ offices, setOffices }}>
        {children}
    </Context.Provider>
}


export default Context