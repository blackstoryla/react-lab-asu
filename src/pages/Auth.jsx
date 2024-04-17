import { useForm } from "react-hook-form"
import { Button } from "../components/Button";
import { useCallback, useState, useEffect } from "react";
import { useDispatch} from 'react-redux'
import { logIn } from "../ReduxSore/actions";

import { Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

export function Auth(){
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()

    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
      }, []);

    const [textAlert, setTextAlert] = useState();

    const auth = useCallback((d) => {
        if(d.login === "admin" && d.password === "admin"){
            dispatch(logIn())
            handleClick()
            setTextAlert("Вы авторизовались")
        }
        else{
            handleClick()
            setTextAlert("Повторите ввод")
        }

        for(let i = 0; i < users.length; i++){
            if(d.login == users[i].name && d.password == users[i].username){
                console.log(users[i])
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({...users[i]}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
            }
        }

    },[]);

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };
    const style = {
        marginTop: '15px',
        color: 'text.secondary',
    }

    return (
      <>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={5000}
          onClose={handleClose}
          message={textAlert}
        />
        <div className="mainContainer uhf-container has-default-focus">
          <div className="columns has-large-gaps display-flex container-auto-height">
            <Box
              component="div"
              sx={{ bgcolor: "background.paper", py: 4 }}
              className="primary-holder column "
            >
              <form onSubmit={handleSubmit(auth)}>
              <Typography variant="body1" sx={style} >Login</Typography>
                <input {...register("login")} />
                <Typography variant="body1" sx={style} >Password</Typography>
                <input {...register("password")} />
                <Button>Войти</Button>
              </form>
            </Box>
          </div>
        </div>
      </>
    );
}