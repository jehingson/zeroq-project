import React from 'react'
import styled from 'styled-components';
import { useOffices } from '../../Hooks/useOffices';
import Loaging from '../Utils/Loaging';
import Office from './Office';


function OfficesList() {
    const { loading, offices } = useOffices()

    if (loading) return (<Loaging />)
    return (
        <OfficesListContainer>
            {
                offices.length ?
                    offices.map(ofc => <Office
                        key={ofc.name}
                        name={ofc.name}
                        online={ofc.online}
                        waiting={ofc.waiting}
                        elapsed={ofc.elapsed}
                        color={ofc.color}
                    />)
                    : (<Loaging />)
            }
        </OfficesListContainer>
    )
}

export default OfficesList

const OfficesListContainer = styled.div`
    height: 100%;
    overflow-x:hidden;
    max-width:1280px;
    gap: 10px;
    margin: 30px auto 20px auto;
    width: 97%;
    display: grid;
    padding-bottom: 23px;
    @media (min-width: 470px){
        grid-template-columns: 1fr 1fr ;
    }
    @media (min-width: 700px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 964px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`