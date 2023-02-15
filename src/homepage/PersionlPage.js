// import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../component/NavBar'
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ScrollBox from '../component/ScrollBox';
import CoverImageAndAvata from '../component/CoverImageAndAvata';

export default function PersionlPage() {
    return (
        <>
            <NavBar />
            <ScrollBox>
                <CoverImageAndAvata/>
            </ScrollBox>
        </>
    )
}
