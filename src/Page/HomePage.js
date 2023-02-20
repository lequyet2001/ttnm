
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import React from 'react'
import NavBar, { Item } from '../component/NavBar';
import LeftBar from '../component/LeftBar';
import ScrollBox from '../component/ScrollBox';
import Main from '../component/Main';
// import { Avatar, Button, TextField } from '@mui/material';






export default function HomePage() {
  return (<>
    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.17)' }}>
      <Box sx={{ paddingBottom: '10px' }} >
        <Item>
          <NavBar />
        </Item>
      </Box>
      <ScrollBox sx={{ maxHeight: 700 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={0.1}></Grid>
            <Grid item xs={2} container
              direction="row"
              sx={{
                marginLeft: '20px'
              }}
            >
              <Item>
                <LeftBar />
              </Item>
            </Grid>
            <Grid item xs={9} sx={{ minWidth: '100px' }}>
              <Main />
            </Grid>
            {/* <Grid item xs={1}></Grid> */}
          </Grid>

        </Box>
      </ScrollBox>
    </Box>
  </>
  )
}
