import React from 'react'
import styled from 'styled-components';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Office({ name, online, waiting, elapsed }) {
    return (
        <OfficeContainer online={online}>
            <h2>{name}</h2>
            <div>
                <div><PersonOutlineOutlinedIcon /> <p>{waiting}</p> </div>
                <div><AccessTimeIcon /><p>{elapsed}</p></div>
            </div>
        </OfficeContainer>
    )
}

export default Office


const OfficeContainer = styled.div` 
    line-height: 22px;    
    background-color:  ${props => props.online ? "#FDFEFA" : "#2D4E83"};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >h2{ 
        color: ${props => props.online ? "#999F9B" : "#fff"};
        opacity: .8;
        padding: 15px 20px 15px 20px;
        min-height: 50px;
    }
    >div{
        display: flex;
        padding: 5px 20px 5px 20px;
        background-color:  ${props => props.online ? "#999F9B" : "#00B886"};
        gap: 20%;
        >div{
            display: flex;
            align-items: center;
            gap: 8px;
            opacity: .8;
            font-weight: 600;
            font-size: 14px;
            color:white;
            padding: 0;
            .MuiSvgIcon-root{
                width: 20px;
                margin-left: -3px;
            }
        }
    }
`