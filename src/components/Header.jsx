import { Button } from "./Button";
import { ThemeContext } from "../wigets/Theme";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import { useState} from "react";
// import { useSelector} from 'react-redux'
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

export function Header(){
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <Link href={"/table"}>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>Таблица</ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
  // let auth = useSelector((state) => state.auth);

  return (
    <Box
      component="div"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <header>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>

        <Link href={"/"}>
          <Typography variant="h2" color="text.primary">
            Главная страница
          </Typography>
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
      <Divider cx={{ flexGrow: 1, bgcolor: "text.primary", p: 1 }} />
    </Box>
  );
}