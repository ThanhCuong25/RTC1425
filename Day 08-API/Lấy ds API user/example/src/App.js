import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users,setUsers]= useState([])
  
  useEffect(()=>{
    async function getUser() {
      try {
        let data = await axios.get('http://localhost:3002/api/uers')
        setUsers(data.data)
        console.log(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  })
  return (
    <>
    <h1>Users</h1>
    <table>
        {users.map(item=> (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        )
        )}
   
    </table>
    </>
  );
}

export default App;
