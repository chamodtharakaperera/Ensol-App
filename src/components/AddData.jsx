import axios from "axios";
import React, { Component, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const AddData = () => {

   const[serialnumber,setserialNumber] = useState("");
   const[machinename,setmachineName] = useState("");
   const [description,setDescription] = useState("");
   const [rentprice,setrentPrice] = useState(0);
   const [availablequantity,setavailableQuantity] = useState(0);
   const [image,setImage] = useState({});


   console.log("machinePhotos"+serialnumber);
   console.log("machinename"+machinename);
   console.log("description"+description);
   console.log("availablequantity"+availablequantity);
   console.log("rentprice"+rentprice);
   console.log("image"+image);
  
   

   const data = {serialNumber:serialnumber,machineType:machinename,description:description,rentPrice:rentprice,availableQty:availablequantity,machinePhotos:image}

   const Insert = async() => {

    const token = sessionStorage.getItem("token")
    console.log(token);
  
    await axios.post("https://ensolapi.herokuapp.com/machine", data ,
      {
        headers : {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }
    
     
    ).then((response)=> {
      console.log(response.data);
    })

  }


   const imageCome = (img) =>{
    setImage(img);
   }
   

  
    return (
      <Container className="mt-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Serial Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Serial No"
           onChange={(event)=>{
            setserialNumber(event.target.value);
       }}
            
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Machine Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Machine Name"
             onChange={(event)=>{
              setmachineName(event.target.value);
         }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Your Description"
              rows={3}
              onChange={(event)=>{
                setDescription(event.target.value);
           }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rent Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Rent Price" 
             onChange={(event)=>{
              setrentPrice(event.target.value);
         }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Available Quantity</Form.Label>
            <Form.Control type="email" placeholder="Enter Available Quantity" 
             onChange={(event)=>{
              setavailableQuantity(event.target.value);
         }}
            />
          </Form.Group>
          {/* https://react-bootstrap.github.io/forms/form-control/ */}
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload Multiple Images</Form.Label>
            <Form.Control type="file" multiple
             onChange={(event)=>{
              imageCome(event.target.files[0]);
         }}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Button 
            onClick={Insert}
            style={{color:"white"}} className="mr-5" variant="primary">
              Insert
            </Button>{" "}
            <Button style={{color:"white"}} className="mr-5" variant="primary">
              Update
            </Button>{" "}
            <Button style={{color:"white"}} className="mr-5" variant="primary">
              Delete
            </Button>{" "}
            <Button style={{color:"white"}} className="mr-5" variant="primary">
              Clear
            </Button>{" "}
          </Form.Group>
        </Form>
      </Container>
    );
  
}

export default AddData;