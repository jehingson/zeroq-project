import React from 'react'
import styled from 'styled-components';

function OfficesList() {
    return (
        <OfficesListContainer>
            hola mundo
        </OfficesListContainer>
    )
}

export default OfficesList

const OfficesListContainer = styled.div`
    height: 100%;
    overflow-x:hidden;
    max-width:1280px;
    gap: 10px;
    margin: 30px auto;
    width: 97%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`