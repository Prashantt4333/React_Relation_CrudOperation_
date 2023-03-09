import React, { useEffect, useState } from 'react'
import { Button, Form, Table} from 'react-bootstrap'

const CreateStudents = () => {
    // Hooks Area
  //let teacher ="";
  const [teacher , setTeacher] = useState([]);


  //useEffect(cbfn,Arr); 
  useEffect(()=>{
    // I Want to call the get all teacher api
    fetch((`http://localhost:1337/api/teachers`),{
      method:"GET"
    })
    .then(res=>res.json())
    .then((data)=>{
      // console.log("data -- >",data.data);
          setTeacher(data.data)
      // Set the hook variable
    })
    .catch(()=>{

    });

  },[])
    // Function Defination areaa
    let createStudent = () =>{
        
      let payload = {
         "data": {
            "name": document.getElementById("student_name").value,
            "teachers": [parseInt(document.getElementById("teacher").value)]
          }
      }
      console.log(payload);
      fetch(`http://localhost:1337/api/students`,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body: JSON.stringify(payload)
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        alert("Student inserted succesfuly")
      })
      .catch();
    }
  return (
    <>
      <div className='container mt-5 '>
        <h1 className='mb-5 text-center'>Create Student</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Select Teacher</Form.Label>
              <Form.Select id='teacher' aria-label="Default select example" className='mb-3'>
                {
                  teacher.map((cv,idx,arr)=>{
                    console.log(cv);
                    return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                      
                  })
                }
              </Form.Select>
              <Form.Label>Student Name</Form.Label>
              <Form.Control id='student_name' type="text" placeholder="Student Name" />
              <Form.Text className="text-muted">
             
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="button" onClick={()=>{createStudent()}}>
              Submit
            </Button>
          </Form>
          <br />
          <hr />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>StudentA</td>
                <td>
                  <Button className="btn btn-sm me-2 btn-success">View</Button>
                  <Button className="btn btn-sm me-2 btn-primary">Update</Button>
                  <Button className="btn btn-sm me-2 btn-danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
      </div>
    </>
  )
}

export default CreateStudents
