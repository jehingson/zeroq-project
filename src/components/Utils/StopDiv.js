import React, { useState, useEffect, useContext } from 'react'
import Zoom from '@mui/material/Zoom';
import styled from 'styled-components';
import OfficesContext from '../../Context/OfficesContext'


function StopDiv() {
    const { setStep } = useContext(OfficesContext)
    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(true);
    const [step3, setStep3] = useState(false);

    useEffect(() => {
        if (step1) {
            setStep('online')
        }
        if (step2) {
            setStep('all')
        }
        if (step3) {
            setStep('offline')
        }
    }, [step1, step2, step3])


    const handleStep1 = () => {
        setStep1(true);
        setStep2(false);
        setStep3(false);
    };
    const handleStep2 = () => {
        setStep1(false);
        setStep2(true);
        setStep3(false);
    };
    const handleStep3 = () => {
        setStep1(false);
        setStep2(false);
        setStep3(true);
    };


    return (
        <FilterState>
            <Zoom in={step1} onClick={handleStep1}>
                <div className="div" style={{ backgroundColor: "#00b886" }}>
                    <p>Online</p>
                </div>
            </Zoom>
            <Zoom in={step2} onClick={handleStep2}>
                <div className="div" style={{ backgroundColor: "#2d4e83" }}>
                    <p>Todos</p>
                </div>
            </Zoom>
            <Zoom in={step3} onClick={handleStep3}>
                <div className="div" style={{ backgroundColor: "#7f8581" }}>
                    <p>Offline</p>
                </div>
            </Zoom>
            <DivOff>
                <p onClick={handleStep1}>Online</p>
                <p onClick={handleStep2}>Todos</p>
                <p onClick={handleStep3}>Offline</p>
            </DivOff>
        </FilterState>
    )
}

export default StopDiv


const FilterState = styled.div` 
    width: 240px;
    height: 36px;
    z-index: 10;
    padding: 0;
    margin: 0;
    gap: 4px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    box-shadow: inset 0 1px 3px rgb(0 0 0 / 30%), 0 1px rgb(255 255 255 / 10%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .MuiPaper-root{
        width: 73px;
        height: 25px;
        margin: 0;
        padding: 0;
    }
    .div{
        z-index: 10;
        background-color:red;
        width: 76px;
        height: 32px;
        text-align: center;
        border-radius: 3px;
        box-shadow: inset 0 1px rgb(255 255 255 / 50%), 0 0 2px rgb(0 0 0 / 20%);
        >p{
            color: white;
            font-size: 15px;
            font-weight: 700;
            opacity: .9;
            margin-top: 5px;
        }
    }
`

const DivOff = styled.div`
    position: absolute;
    left: 0;
    z-index: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    >p{
        cursor: pointer;
        width: 79px;
        height: 27px;
        color: white;
        font-size: 15px;
        font-weight: 600;
        opacity: .35;
        margin-top: 5px;
    }
`
