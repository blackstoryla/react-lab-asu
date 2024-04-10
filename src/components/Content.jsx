import './style.css'
import Box from '@mui/material/Box';

export function Content({children}){
    return(
        <Box component="div" sx={{ bgcolor: "background.paper", py: 4 }} className="primary-holder column is-two-thirds-tablet">
            {children}
        </Box>
    )
}