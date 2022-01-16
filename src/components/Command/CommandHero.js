import React from 'react'
import styled from 'styled-components';
import Hero from './Hero';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


function CommandHero() {
    return (
        <HeroContainer>

            <Hero title="Menos de 15 minutos" color="#00B886" />
            <Hero title="Entre 15 y 20 minutos" color="#E9AB48" />
            <Hero title="Más de 20 minutos" color="#F36A5A" />
            <Hero title="Desconectado" color="#999F9B" />
            <Hero stope={true} Icon={AccessTimeIcon} title="Esperar promedio" />
            <Hero Icon={PersonOutlineOutlinedIcon} title="Personas en fila" />
            <Hero Icon={AccessTimeIcon} title="Filas congeladas" />
            <Hero Icon={LaptopWindowsOutlinedIcon} title="Módulos activos" />
        </HeroContainer>
    )
}

export default CommandHero

const HeroContainer = styled.div`
    height: 100%;
    overflow-x:hidden;
    max-width: 1285px;
    position: relative;
    padding: 17px 15px;
    color: white;
    gap: 10px;
    margin: -16px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: #2D4E83;
    border-radius: 9px;
    box-shadow: 0px 7px 10px -3px rgb(0 0 0 / 20%);
    font-size: 14px;
    @media (max-width: 1141px) {
        margin: -10px auto;
    }

`


