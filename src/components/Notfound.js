import React from 'react';
import { Container } from 'react-bootstrap';
import error from '../Images/error.gif';

const Notfound = () => {
  return (
  <>
  <Container>
 <img src={error} style={{width:"70%",marginTop:"60px",marginLeft:"150px"}} />
 </Container>

  </>
  );
};

export default Notfound;
