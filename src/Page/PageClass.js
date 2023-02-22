import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import LeftBarPageClass from '../component/LeftBarPageClass'
import MainPageClass from '../component/MainPageClass'
import NavBar, { Item } from '../component/NavBar'




export default function PageClass() {

  const [value,setValue]=useState(0);
  const [index,setIndex]=useState(0);




  return (
    <>
      <Box sx={{}}>
        <Box sx={{ paddingBottom: '10px' }} >
          <Item>
            <NavBar />
          </Item>
        </Box>
        <Grid container>
          <Grid item xs={2}>
            <Item>
              <LeftBarPageClass onSendValue={(value)=>setValue(value)} onSendIndex={(value)=>setIndex(value)} />
            </Item>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={8}>
            <Item>
              <MainPageClass index={index} value={value} data={index} />
            </Item>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
