import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/logo.png'

export const Logo = () => {
    return (
        <div style={{
            display: "flex",
            marginRight: "auto",
            alignItems: "center",
            gap: "8px"
        }}>
            <Link to={"/"}>
                <img src={logoImage} alt="BVAI" width={'30px'} height={'30px'} className="image-inverted"/>
                <Typography sx={{
                        display: {md:"block", sm:"none", xs:"none"}, 
                        mr: "auto",
                        fontWeight: "800",
                        textShadow: "2px 2px 20px #000"
                    }}>
                    <span style={{ fontSize: "20px" }}>BV-IA</span>APP
                </Typography>
            </Link>
        </div>
    )
}
