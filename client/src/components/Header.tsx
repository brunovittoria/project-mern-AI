import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Logo } from './shared/Logo'
import { useAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
    const auth = useAuth()

    return (
        <AppBar sx={{bgcolor: "transparent" , position: "static", boxShadow: "5px"}}>
            <Toolbar sx={{display: "flex"}}>
                <Logo/>
                <div>
                    {auth?.isLoggedIn ? (
                        <>
                            <NavigationLink bg= "#00ffc" to= "/chat" text="Chat with me!" textColor="black" />
                            <NavigationLink />
                        </>
                    ) : (

                    ) }
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header