import {Menu} from '../components/Menu.jsx'
import './../components/style.css'
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const style = {
  marginTop: '15px',
  color: 'text.secondary',
}

export function LabItem() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
    }, []);

    if (users.length < 1){
      return(
        <>
          <p>Загрузка</p>
        </>
      )
    }

    return (
      <>
        <div className="mainContainer  uhf-container has-default-focus">
          <div className="columns has-large-gaps display-flex  container-auto-height">
            <Menu>
              {
                users.map(user => (
                  <Link key={user.id} to = {`/${user.id}`}>
                    <Typography variant="body1" sx={style} >{user.name}</Typography>
                    <Divider  cx={{ flexGrow: 1, bgcolor: 'text.primary', p: 1 }} />
                  </Link>
                ))
              }
            </Menu>

            <Divider orientation="vertical" variant="middle"  />

            <Outlet/>

          </div>
        </div>
      </>
    );
  }