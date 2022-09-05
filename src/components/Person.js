import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';


export default function Person() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [newAge, setNewAge] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setName(event.target.Name.value)
    setAge(event.target.Age.value)
    setGender(event.target.Gender.value)
    getNewAge(age)


  }


  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleAgeChange(event) {
    setAge(event.target.value)
  }

  function handleGenderChange(event) {
    setGender(event.target.value)
  }
  async function getNewAge() {
    
    await axios.post(`https://express-server0.herokuapp.com/person`, {age})
    .then(res => {
        console.log(res.data)
        setNewAge(res.data)
        
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" id="Name"  data-testid='name-input' onChange={handleNameChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" id="Age"   data-testid='age-input' onChange={handleAgeChange}/>
        </Form.Group>

        <Form.Select aria-label="Default select example" id="Gender"  data-testid='gender-input' onChange={handleGenderChange}> 
      <option>Open this select menu</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </Form.Select>
        <Button variant="outline-dark" type="submit" data-testid="submit">
          Submit
        </Button>
        
        <Form.Group>
        <Form.Label data-testid='Name'>Name: {name}</Form.Label>
        <Form.Label data-testid='Age'>Age: {age}</Form.Label>
        <Form.Label  data-testid='Gender'>Gender: {gender}</Form.Label>
        <Form.Label  id="new-age" data-testid='NewAge'>New Age: {newAge}</Form.Label>
        </Form.Group>
      </Form>
   
    </div>
  );
}