import React, { useState } from 'react'
import styled from 'styled-components';
import PoppaModel from '../Utils/PoppaModel';

export default function FooterCommand() {

    const [open, setOpen] = useState(false)

    return (
        <>
            {open && <PoppaModel setOpen={setOpen} />}

            <FooterContainer onClick={() => setOpen(true)}>
                <div className="hide">
                    <div style={{ backgroundColor: "#00B886" }}></div>
                    <h4>MÓDULOS ENTRE 15 Y 20 MIN</h4>
                </div>
                <div>
                    <div style={{ backgroundColor: "#F36A5A" }}></div>
                    <h4>MÓDULOS CON MAS DE 20 MIN</h4>
                </div>
            </FooterContainer>
        </>
    )
}

const FooterContainer = styled.div`
cursor: pointer;
max-width:590px;
overflow: hidden;
width: 100%;
height: 34px;
border-radius: 2px;
background-color: #2D4E83;
text-transform: uppercase;
padding: 0 2rem;
position: fixed;
line-height: 36px;
box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
bottom: 0;
right: 0;
display: flex;
align-items: center;
transition: .3s ease-out;
color: white;

:hover{
    background-color: #26a69a;
}
>div{
    >h4{
        font-weight: 400;
        padding: 0 20px 0 10px;
    }
    display: flex;
    align-items: center;
    >div{
        width: 20px;
        height: 20px;
        border-radius: 2px;
    }
}
@media (max-width: 634px) {
      .hide{
          display: none;
      }
      >div{
          margin-left: 12%;
      }
    }
@media (max-width: 331px) {
      >div{
        font-size: 11px;
        margin-left: 15%;
      }
    }

`
