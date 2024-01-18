import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Logo } from './shared/Logo'

const Header = () => {
    return (
        <AppBar sx={{bgcolor: "transparent" , position: "static", boxShadow: "5px"}}>
            <Toolbar sx={{display: "flex"}}>
                <Logo/>
            </Toolbar>
        </AppBar>
    )
}

export default Header