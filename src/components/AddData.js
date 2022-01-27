
import React ,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Container, Button} from 'react-bootstrap';
import { addUser } from '../service/api';


const initialValues = {
  name : "",
  username : "",
  email : "",
  phone : ""
}

const AddData = () => {
  const [user, setUser] = useState(initialValues);
  const {name,username,email,phone}= user;
  const history = useHistory();

  //useEffect(() => { }, [user]);

  const onValueChange = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);

  }

  const addUserDetails = async() => {
    await addUser(user)
    window.alert("Data Added Successfully");
    history.push('/AllData');
  }

  return (
    <>
    <Container style={{width:"50%"}}>
      <br />
     <h3> Add Data </h3>

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


        <Button variant="primary"  onClick={() => addUserDetails()}>
          Add User
        </Button>
      </Form>
      </Container>

    </>
  )
};

export default AddData;
