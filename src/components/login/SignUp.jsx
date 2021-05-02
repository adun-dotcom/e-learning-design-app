import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import './style.css'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import MyButton from '../button'
import Google from '../../assets/google.svg'
function Register(props) {
  return (
    <Modal
      className="modal-wrapper "
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-div">
        <i class="fas fa-times-circle" onClick={props.onHide}></i>
        <Modal.Header className="modal-header">
          <Modal.Title
            id="contained-modal-title-vcenter "
            className="modal-title"
          >
            <img src={AppLogo} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Form>
            <Form.Group controlId="formBasicFirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter firstname" />
            </Form.Group>
            <Form.Group controlId="formBasicFirstname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <MyButton
              text="Sign up"
              clsName="button border-0 btn btn-lg modal-button"
            />
          </Form>
          <div className="or-separator">
            <hr />
            <div>or</div>
            <hr />
          </div>
          <div>
            <Button href="#" size="lg" block className="modal-google">
              <img src={Google} alt="" className="mr-2" /> Google
            </Button>
            <p className="pt-5 text-center">Already have an account? <a href="/login" className="login-link">Log in</a></p>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  )
}

export default Register