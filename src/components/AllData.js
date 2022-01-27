import React,{useEffect,useState} from 'react';
import { getUsers,deleteUser } from '../service/api';
import {Table, Container, Button} from 'react-bootstrap';
import {BiEdit} from 'react-icons/bi';
 import {FaTrash} from 'react-icons/fa';
 import {Link} from 'react-router-dom';

const AllData = () => {

  const [users, setUsers] = useState([]);

  const getAllUsers = async() => {
   const response = await getUsers();
   console.log(response.data);
   setUsers(response.data);
  }
  useEffect(() => {
    getAllUsers();
  }, [])

  //deleting
const deleteUserData = async (id) => {
  await deleteUser(id);
  getAllUsers();
}


  return (

  <>
  <Container>
  All user data


  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(user => (
        <tr>
         <td>{user.id}</td> 
         <td>{user.name}</td>
         <td>{user.username}</td>
         <td>{user.email}</td>
         <td>{user.phone}</td>
        <td >
          <Link to={`/edit/${user.id}`}><BiEdit style={{color:"red", marginRight:"40px", fontSize:"27px"}}/> </Link>
          <a onClick={() => deleteUserData(user.id)} style={{cursor:"pointer"}}><FaTrash style={{color:"red", marginLeft:"30px", fontSize:"23px"}} /></a>
        </td>

        </tr>
        
      ))
    }
  </tbody>
</Table>
</Container>
  </>
      
  
  )
};

export default AllData;
