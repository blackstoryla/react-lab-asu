import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export function Footer(){
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 4 }} className="footer-layout ">
           <Divider variant="middle"  />
            <Link href={"/"}>
              <Typography variant="body1" color="text.secondary">Главная страница</Typography>
            </Link>
            <Typography variant="body1" color="text.secondary">Заготовка на будущее</Typography>
            <Typography variant="body1" color="text.secondary">Доп контент</Typography>
        </Box>
    );
}