
import { Box, styled } from '@mui/material';



export default styled(Box)({
    // Hide default scrollbar
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '-ms-overflow-style': 'none',  /* IE and Edge */
    'scrollbar-width': 'none',  /* Firefox */

    // Add custom scrollbar
    overflowY: 'scroll',
    scrollbarColor: '#ccc transparent',  /* Firefox */
    '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ccc',
        borderRadius: 10,
        transition: 'background-color 0.3s ease-out',
    },
    '&:hover::-webkit-scrollbar-thumb': {
        backgroundColor: '#aaa',
    },
    
}); 