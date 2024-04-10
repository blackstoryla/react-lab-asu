import { Button } from "./Button";
import { ThemeContext } from "../wigets/Theme";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
// import { useSelector} from 'react-redux'
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export function Header(){
  // let auth = useSelector((state) => state.auth);

  return (
    <Box component="div" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <header>
        <Link href={"/"}>
          <Typography variant="h2" color="text.primary">Главная страница</Typography>
        </Link>
        <ThemeContext.Consumer>
          {({ changeThemeOnClick }) => (
            <IconButton onClick={changeThemeOnClick}>
              <DarkModeIcon />
            </IconButton>
          )}
        </ThemeContext.Consumer>
        <Link href={"/authorization"}>
          <Button>Авторизация</Button>
        </Link>
      </header>
      <Divider  cx={{ flexGrow: 1, bgcolor: 'text.primary', p: 1 }} />
    </Box>
  );
}