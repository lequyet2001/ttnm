
import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

import ScrollBox from './ScrollBox';






export function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function LeftBarPageClass(props) {
    const [data, setData] = useState(0);
    const handleChange = (e, value) => {
        setData(value)
        props.onSendValue(value)
    }
    return (
        <>
            <Box >
                <ScrollBox sx={{ height: '650px' }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"

                        value={data}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        {
                            [...new Array(10)].map((e, index) => {
                                return (<>
                                    <Tab sx={{
                                        backgroundColor: 'white',
                                        padding: '10px',
                                        border: '1px solid blue',
                                        margin: '10px',
                                        borderRadius: '10px'
                                    }}
                                        onChange={() => {
                                            props.onSendIndex(index)
                                            setData(index)
                                        }}
                                        label={`item ${index}`}
                                        {...a11yProps(index)} />
                                </>)
                            })
                        }
                    </Tabs>
                </ScrollBox>
            </Box>
        </>
    )
}
