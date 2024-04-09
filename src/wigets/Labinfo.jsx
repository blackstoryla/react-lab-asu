import { Content } from "../components/Content"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

export function LabInfo(){
    let {id} = useParams();

    let [todos, setTodos] = useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/'+ id +'/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
    },[id]);

    if (todos.length < 1){
        return(
        <>
            <p>Загрузка</p>
        </>
        )
    }

    return(
        <>
        <Content>
        {
            todos.map(todo => (
                <div key={todo.id}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>
            ))
        }
        </Content>
        </>
    )
}