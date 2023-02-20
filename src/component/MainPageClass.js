import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ScrollBox from './ScrollBox'
import { Item } from './NavBar'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { a11yProps } from './LeftBarPageClass';
// import Box from '@mui/material/Box';
import VideocamIcon from '@mui/icons-material/Videocam';



export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    const [value2, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


export default function MainPageClass(props) {

    const data = [
        { title: 'Trang chủ' },
        { title: 'Bài Tập' },
        { title: 'Tài Liệu' },

    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <ScrollBox sx={{ height: '650px' }}>
                {[...new Array(10)].map((e, e2) => {
                    return (<>
                        <TabPanel value={props.value} index={e2}>

                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                aria-label="scrollable prevent tabs example"
                                sx={{}}
                            >
                                {
                                    data.map((e, index) => {
                                        return <Tab label={e.title}
                                                {...a11yProps(index)}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'grey',
                                                        color: 'white'
                                                    }
                                                }}
                                            />
                                    })
                                }
                                <Box >
                                    <Button href='http://localhost:3000/zoom' sx={{ left: '500px', color: 'black', '&:hover': { color: 'blue' } }}  >
                                        <Typography> Phòng họp</Typography>
                                        <VideocamIcon sx={{ marginLeft: '10px' }} />
                                    </Button>
                                </Box>
                            </Tabs>

                            <Box sx={{ border: '1px solid black', marginTop: '10px' }}></Box>
                            <TabPanel value={value} index={0}>
                                Trang chu {props.index}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Tai lieu {props.index}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Bai tap {props.index}
                            </TabPanel>
                        </TabPanel>

                    </>)
                })}
            </ScrollBox>
        </Box>
    )
}
