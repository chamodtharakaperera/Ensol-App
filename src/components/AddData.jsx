import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class AddData extends Component {
  render() {
    return (
      <Container className="mt-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Serial Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Serial No" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Machine Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Machine Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Your Description"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Rent Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Rent Price" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Available Quantity</Form.Label>
            <Form.Control type="email" placeholder="Enter Available Quantity" />
          </Form.Group>
          {/* https://react-bootstrap.github.io/forms/form-control/ */}
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Upload Multiple Images</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <Form.Group className="my-3">
            <Button style={{color:"white"}} className="mr-5" variant="primary">
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
}
