import React from 'react'
import styled from 'styled-components'

function PoppaModel({ setOpen }) {
    return (
        <PoppaContainer>
            <Card>
                <h2>Módulos con SLA en alerta</h2>
                <div>
                    <p>El SlA (color) puede actualizarse en la vista del módulo al ingresar a su centro de mando. Actualización cada 30 segundos</p>
                </div>
                <div className="button">
                    <button onClick={() => setOpen(false)}>CERRAR</button>
                </div>
            </Card>

        </PoppaContainer>
    )
}

export default PoppaModel

const PoppaContainer = styled.div`
width: 100vw;
height: 100%;
position: fixed;
top: 0;
z-index: 99999;
display: flex;
align-items: end;
justify-content:center;
background-color: rgba(255, 255, 255, 0.9);
`

const Card = styled.div`
    position: relative;
    text-align: center;
    width: 60%;
    height: 90vh;
    box-shadow: 0 2px 5px 5px rgb(0 0 0 / 3%);
    background: #fff;
    display: grid;
    grid-template-rows: .5fr 2fr .3fr;
    >h2{
        margin-top: 7%;
        font-weight: 600;
        opacity: .7;
    }
    p{
        border: 1px solid #ffe58f;
        background: #fffbe6;
        padding: 1em;
        font-size: 20px;
        opacity: .8;
    }
    .button{
        display: flex;
        align-items: center;
        justify-content:center;
        background: #e9e9e9;
        border-top: 1px solid #dedede;
        >button{
            color: white;
            background-color: #F44336;
            outline:0;
            border: none;
            padding: 10px 20px;
            border-radius: 2px;
            cursor: pointer;
            &:hover{
                background-color: red;
            }
        }
    }

    
`
