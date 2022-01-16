import { Search } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { styled as MuiStaled } from '@mui/material/styles';
import StopDiv from '../Utils/StopDiv';

function Command() {
    const [filter, setFilter] = useState('');
    const [filterTwo, setFilterTwo] = useState('')



    return (
        <CommandContainer>
            <ContentSearch>
                <Search />
                <input placeholder="" />
            </ContentSearch>
            <ContentFilter>
                <FormControl>
                    <Select
                        sx={{ m: 1, minWidth: 180 }}
                        value={filter}
                        id="demo-simple-select-helper"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <MenuItem value={10}>Categoria</MenuItem>
                        <MenuItem value={20}>Promedio de espera</MenuItem>
                        <MenuItem value={30}>Tickets emitidos</MenuItem>
                        <MenuItem value={40}>Personas en fila</MenuItem>

                    </Select>
                </FormControl>
            </ContentFilter>
            <ContentFilter>
                <FormControl>
                    <Select
                        sx={{ m: 1, minWidth: 150 }}
                        id="demo-simple-select-helper"
                        value={filterTwo}
                        placeholder=""
                        onChange={(e) => setFilterTwo(e.target.value)}
                    >
                        <MenuItem value={10}>Region</MenuItem>
                        <MenuItem value={20}>Ciudad</MenuItem>
                        <MenuItem value={30}>Comunidad</MenuItem>
                    </Select>
                </FormControl>
            </ContentFilter>

            <ContentState>

                <StopDiv />
                <ColorButton variant="contained">ASIGNAR SLA</ColorButton>
            </ContentState>
        </CommandContainer>
    )
}

export default Command


const CommandContainer = styled.div`
    height: 100%;
    overflow-x:hidden;
    max-width: 1310px;
    gap: 10px;
    margin: 0 auto;
    width: 97%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const ContentSearch = styled.div`
    width: 320px;
    height: 40px;
    display:flex;
    align-items: center;
    background: white;
    margin: 0 0 5px ;
    >.MuiSvgIcon-root  {
        color: #666;
        padding: 8px;
    }
    >input {
        outline: 0;
        border: none;
        font-size: 14px;
        color: #444;
        font-weight: 500;
        line-height: 21px;
    }
`

const ContentFilter = styled.div`
    padding: 0;
    margin-top: -6px;
    margin-left: -7px;
    display: flex;
    flex-direction: column;
    .MuiOutlinedInput-root{
        background-color:white;
        min-width: 178px;
        height: 38px;
        font-size:  14px;
    }
`

const ColorButton = MuiStaled(Button)(({ }) => ({
    backgroundColor: '#E9AB48',
    '&:hover': {
        backgroundColor: "#b47d23",
    },
}));

const ContentState = styled.div` 
    display: flex;
    max-width: 582px;
    width:100%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    margin-top: -5px;
    @media (max-width: 1351px) {
        max-width: 550px;
    }
    @media (max-width: 1317px) {
        max-width: 500px;
    }
    @media (max-width: 1265px) {
        max-width: 450px;
    }
    @media (max-width: 1213px) {
        max-width: 400px;
    }
    @media (max-width: 1161px) {
        max-width: 380px;
    }
    @media (max-width: 1141px) {
        max-width: 1309px;
    }
    @media (max-width: 735px) {
        max-width: 500px;
    }
    @media (max-width: 721px) {
        max-width: 450px;
    }
    @media (max-width: 669px) {
        max-width: 400px;
    }
    @media (max-width: 617px) {
        max-width: 380px;
    }
    @media (max-width: 597px) {
        max-width: 580px;
    }
`




