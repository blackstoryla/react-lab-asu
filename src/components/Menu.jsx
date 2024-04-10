import './../components/style.css'
import { Box } from '@mui/material';

export function Menu({children}){
    return(
        <Box component="div" sx={{ bgcolor: "background.paper", py: 4 }} className="left-container column one-third-tablet">
            {children}
        </Box>
    )
}