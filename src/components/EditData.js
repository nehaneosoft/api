
import React ,{useState, useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import {Form, Container, Button} from 'react-bootstrap';
import { editUser, getUsers } from '../service/api';


const initialValues = {
  name : "",
  username : "",
  email : "",
  phone : ""
}

const EditData = () => {
  const [user, setUser] = useState(initialValues);
  const {name,username,email,phone}= user;
  const {id} =useParams();
  const history = useHistory();


  useEffect(() => {
      loadUserData();
   },[]);

   const loadUserData = async() => {
       const response = await getUsers(id);
       setUser(response.data);

   }


  const onValueChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);

  }

  const editUserDetails = async() => {
    await editUser(id,user)
    window.alert("Data Edited Successfully");
    history.push('/AllData');
  }

  return (
    <>
    <Container style={{width:"50%"}}>
      <br />
      <h3>Edit Data</h3>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name"  onChange={(e) => onValueChange(e)} value={name} placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username"  onChange={(e) => onValueChange(e)}  value={username} placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email"  onChange={(e) => onValueChange(e)} value={email} placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phone"  onChange={(e) => onValueChange(e)} value={phone} placeholder="Enter Number" />
        </Form.Group>


        <Button variant="primary"  onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </Form>
      </Container>

    </>
  )
};

export default EditData;
