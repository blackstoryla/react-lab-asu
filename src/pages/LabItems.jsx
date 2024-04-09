import {Menu} from '../components/Menu.jsx'
import './../components/style.css'
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

    console.log(users)

    return (
      <>
        <div className="mainContainer  uhf-container has-default-focus">
          <div className="columns has-large-gaps display-flex">
            <Menu>
              {
                users.map(user => (
                  <Link key={user.id} to = {`/${user.id}`}>
                    <li>{user.name}</li>
                  </Link>
                ))
              }
            </Menu>

            <Outlet/>

          </div>
        </div>
      </>
    );
  }