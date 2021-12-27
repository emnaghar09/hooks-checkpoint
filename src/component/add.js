import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'; 
import {useState} from 'react';

function Add() {
    // imported
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // added to make the add btn functionnall
    const [name, setName]=useState('')
    const [description, setDescription] = useState('')
    const [affiche, setAffiche] = useState('')
    const [rating, setRating] = useState('')
    
    return (
    <div className="add">
        <Button variant="warning" onClick={handleShow} className="btnadd">
       ADD NEW MOVIE
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="email" placeholder="add the movie name" onChange ={(e)=> setName(e.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="email" placeholder="add the movie description" onChange ={(e)=> setDescription(e.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Affiche</Form.Label>
    <Form.Control type="email" placeholder="Add the affiche" onChange ={(e)=> setAffiche(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="email" placeholder="add the movie ratings" onChange ={(e)=> setRating(e.target.value)} />
    </Form.Group>
    
        </Form>
        
        
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button variant="warning" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
    );
}


export default Add;
