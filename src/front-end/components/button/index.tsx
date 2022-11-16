import React from 'react'
import {styled} from '@mui/material/styles'
import Button,{ButtonProps} from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const ButtonStyled = styled(Button)({
    width:'50px',
    height:'50px'
})

export const ButtonCalc =({symbol,...rest})=>{
    return(
        <Stack spacing ={2} direction = "row">
            <ButtonStyled {...rest} variant="outlined">
                {symbol}
            </ButtonStyled>
        </Stack>
    )
}