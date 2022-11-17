import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const ButtonStyled = styled(Button)({
    width: '50px',
    height: '50px'
})

export const ButtonCalc = ({ symbol, ...rest }) => {
    return (
        <ButtonStyled {...rest} variant="outlined">
            {symbol}
        </ButtonStyled>
    )
}