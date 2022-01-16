import React from 'react'
import styled from 'styled-components';
import gif from './monophy.gif'
export default function Loaging() {
    return (
        <Loading className="loading">
            <img src={gif} />
        </Loading>
    )
}
const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    img{
        width: 80px;
    }
    
`
