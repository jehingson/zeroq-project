import React from 'react'
import styled from 'styled-components'


function Hero({ Icon, title, color, stope }) {
    return (
        <HeroIcons>
            {
                stope && <spam></spam>
            }
            {!Icon ?
                <>
                    <div style={{ background: `${color}` }}></div>
                    <h5>{title}</h5>
                </>
                : <>
                    <div style={{ background: '#1d2f57' }}>
                        <Icon style={{ width: '20px', height: '20px' }} />
                    </div>
                    <h5>{title}</h5>
                </>
            }
        </HeroIcons>
    )
}

export default Hero

const HeroIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between;
    align-items: center;
    >spam{
        width: 30px;
        height: 20px;
        border-left: 1px solid #1d2f57;
    }
    >div{
        width: 20px;
        height: 20px;
        border-radius: 3px;
        position: relative;
    }
    >h5{
        margin-left: 10px;
    }

`
