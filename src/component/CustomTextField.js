import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: 10,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: 10,
    },
    '& .MuiInputLabel-root': {
        // position: 'relative',
        left:(props)=>props.left,
        // transform: 'none',
        // color: 'gray',
        // fontSize: '18px',
        // fontWeight: 'bold',
        // '&.MuiInputLabel-shrink': {
        //     transform: 'none',
        // }
    }
});
