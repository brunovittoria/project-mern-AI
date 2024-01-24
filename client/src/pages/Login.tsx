import React from 'react'
import { Box } from "@mui/material"

const Login = () => {
    return (
        <Box width={"100%"} height={"100%"} display={"flex"} flex={1}> 
            <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none"}}>
                <img src="airobot.png" alt='Robot' style={{width: "400px"}}/>
            </Box>
            <Box
                display={"flex"}
                flex={{ xs: 1, md: 0.5}}
                justifyContent={"center"}
                alignItems={"center"}
                padding={2}
                ml={"auto"}
                mt={16}
                borderColor={"red"}
            >
                <form
                    style={{
                        margin: "auto",
                        padding: "30px",
                        boxShadow: "10px 10px 20px #000",
                        borderRadius: "10px",
                        border: "none",
                    }}
                >
                    <Box sx={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
                        
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default Login