import React from 'react'
import styled from 'styled-components';
import Command from '../Command';

const LogoZeroq = "https://zeroq.cl/command/img/logo.png"

function Header() {
    return (
        <HeaderContainer>
            {/* header-up */}
            <HeaderUp>
                <img src={LogoZeroq} alt="logo" />
            </HeaderUp>
            {/* header-down */}
            <HeaderDown>
                <Command />
            </HeaderDown>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
height: 100%;
background-color: #1d2f57;
>h1{
    color: red;
}
`
const HeaderUp = styled.div`
height: 61px;
> img{
    width: 565;
    height: 241;
    margin: 10px auto 15px 3%;
}
`
const HeaderDown = styled.div`
    background-color: #2D4E83;
    min-height: 60px;
    padding: 10px 0;
    height: 100%;
    position: relative;
`