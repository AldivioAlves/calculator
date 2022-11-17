import React from 'react'
import { ButtonCalc } from '../../components/button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'

export const Calculator: React.FC = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={displayStyle}>
                <Typography variant='h4'>
                    120
                </Typography>
            </Box>
            <Grid container justifyContent={'space-between'} marginBottom={1}>
                <ButtonCalc symbol={"C"} />
                <ButtonCalc symbol={"()"} />
                <ButtonCalc symbol={"%"} />
                <ButtonCalc symbol={"÷"} />
            </Grid>
            <Grid container justifyContent={'space-between'} marginBottom={1}>
                <ButtonCalc symbol={"7"} />
                <ButtonCalc symbol={"8"} />
                <ButtonCalc symbol={"9"} />
                <ButtonCalc symbol={"*"} />
            </Grid>
            <Grid container justifyContent={'space-between'} marginBottom={1}>
                <ButtonCalc symbol={"4"} />
                <ButtonCalc symbol={"5"} />
                <ButtonCalc symbol={"6"} />
                <ButtonCalc symbol={"-"} />
            </Grid>
            <Grid container justifyContent={'space-between'} marginBottom={1}>
                <ButtonCalc symbol={"1"} />
                <ButtonCalc symbol={"2"} />
                <ButtonCalc symbol={"3"} />
                <ButtonCalc symbol={"+"} />
            </Grid>
            <Grid container justifyContent={'space-between'} marginBottom={1}>
                <ButtonCalc symbol={"+/-"} />
                <ButtonCalc symbol={"0"} />
                <ButtonCalc symbol={","} />
                <ButtonCalc symbol={"="} />
            </Grid>
        </Box>
    )
}
const displayStyle ={
    display:'flex',
    border:'0.5px solid',
    borderColor:'primary.main',
    height:50, 
    borderRadius:1, 
    marginBottom:2, 
    alignItems:'center',
    justifyContent:'flex-end', 
    alignContent:'center',
    paddingLeft:1, 
    paddingRight:1
}