import { useForm } from "react-hook-form"
import { Button } from "../components/Button";
import { useCallback, useState, useEffect } from "react";

export function Auth(){
    const {register, handleSubmit} = useForm();

    
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
      }, []);

    const auth = useCallback((d) => {
        if(d.login === "admin" && d.password === "admin"){
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
                    // body: JSON.stringify({
                    //     id: users[i].id,
                    //     name: users[i].name,
                    //     username: users[i].username,
                    //     email: users[i].email,
                    //     address: {
                    //       street: users[i].address.street,
                    //       suite: users[i].address.suite,
                    //       city: users[i].address.city,
                    //       zipcode: users[i].address.zipcode,
                    //       geo: {
                    //         lat: users[i].address.geo.lat,
                    //         lng: users[i].address.geo.lng
                    //       }
                    //     },
                    //     phone: users[i].phone,
                    //     website: users[i].website,
                    //     company: {
                    //       name: users[i].company.name,
                    //       catchPhrase: users[i].company.catchPhrase,
                    //       bs: users[i].company.bs
                    //     }
                    //   }),
                    body: JSON.stringify({...users[i]}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((json) => console.log(json));
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