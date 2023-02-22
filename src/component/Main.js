import { Box, } from '@mui/material'
import React from 'react'
import { Item } from './NavBar'
import NewStatus from './NewStatus'
import ScrollBox from './ScrollBox'
import Status from './Status'




export default function Main() {
    return (
        <ScrollBox hide={true} sx={{
            maxHeight: 680,
            // backgroundColor: 'pink'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: ' column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{ paddingBottom: '10px' }}>

                    <Item>
                        <NewStatus />
                    </Item>
                </Box>
                {[...new Array(5)].map(() => {
                    return (<>
                    <Box margin={1}>

                        <Item>
                            <Status />
                        </Item>
                    </Box>
                    </>)
                })}
            </Box>
        </ScrollBox>
    )
}
