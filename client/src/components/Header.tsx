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
                            <NavigationLink 
                                bg="#161ddc"
                                textColor="white" 
                                to="/chat" 
                                text="Chat with me!" 
                            />
                            <NavigationLink
                                bg="#51538f" 
                                textColor="white"
                                to="Logout"
                                text="logout"
                                onClick={auth.logout}
                            />
                        </>
                    ) : (
                        <>
                            <NavigationLink 
                                bg="#161ddc"
                                textColor="white" 
                                to="/login" 
                                text="Login"
                            />
                            <NavigationLink
                                bg="#51538f" 
                                textColor="white"
                                to="/signup"
                                text="Signup"
                            />
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header