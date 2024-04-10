import { Content } from "../components/Content"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
    py: 1,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'action.selected',
    marginTop: '15px',
    color: 'text.secondary',
  };

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
        <List >
        {
            todos.map(todo => (
                <ListItem key = {todo.id} sx={style}>
                    <ListItemText primary={todo.id} />
                    <ListItemText primary={todo.title} />
                </ListItem>
            ))
        }
        </List>
        </Content>
        </>
    )
}