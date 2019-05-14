import React, { Fragment } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Register = () => {
  return (
    <Fragment>
      <div className="m-5">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" />
          Create Your Account
        </p>
        <Form>
          <FormGroup>
            <Input type="text" placeholder="First Name" name="firstname" />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email Address" name="email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="password" name="password" />
          </FormGroup>
          <hr />
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    </Fragment>
  );
};

export default Register;
