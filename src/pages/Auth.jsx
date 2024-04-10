import { useForm } from "react-hook-form"
import { Button } from "../components/Button";
import { useCallback, useState, useEffect } from "react";
import { useDispatch} from 'react-redux'
import { logIn } from "../ReduxSore/actions";

export function Auth(){
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()

    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
      }, []);

    const auth = useCallback((d) => {
        if(d.login === "admin" && d.password === "admin"){
            dispatch(logIn())
            alert("Вы авторизовались")
        }
        else{
            alert("Повторите ввод")
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

    return(
        <>
            <form onSubmit={handleSubmit(auth)}>
                <label>Login</label>
                <input {...register("login")} />
                <label>Password</label>
                <input {...register("password")} />
                <Button>Войти</Button>
            </form>
        </>
    )
}