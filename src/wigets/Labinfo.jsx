import { Content } from "../components/Content"
import { useParams } from "react-router-dom"
// import { useEffect, useState } from 'react';
import {useGetTodosQuery} from '../Api/api'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

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

  const styleAllert = {
    py: 1,
    width: '100%',
    borderRadius: 2,
    backgroundColor: '#FF8000',
    marginTop: '15px',
    color: '#000000',
  };

export function LabInfo(){
    let {id} = useParams();

    // let [todos, setTodos] = useState([])

    // useEffect(()=>{
    //   fetch('https://jsonplaceholder.typicode.com/users/'+ id +'/todos')
    //   .then(res => res.json())
    //   .then(data => setTodos(data))
    // },[id]);

    // if (todos.length < 1){
    //     return(
    //     <>
    //         <p>Загрузка</p>
    //     </>
    //     )
    // }

    const { data: todos, isLoading, isError, isFetching} = useGetTodosQuery(id)

    if (isLoading) return (
    <Content>
        <Typography>
            Загрузка
        </Typography>
    </Content>)

    if (isError){ 
        console.log('error')
        return (
    <Content>
        <Typography variant="body1" sx={styleAllert}>
            Повторите запрос
        </Typography>
    </Content>)}

    if (isFetching) return (
    <Content>
        <Typography variant="body1" sx={styleAllert}>
            isFetching
        </Typography>
    </Content>)

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