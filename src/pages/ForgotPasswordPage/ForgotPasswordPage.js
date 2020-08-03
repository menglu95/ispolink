import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import FormControl from "../../_components/IspoFormControl";

import "./ForgotPasswordPage.scss"

const logoSVG = require('../../assets/images/svgs/ispolink_logo_blue.svg');

class ForgotPasswordPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: ''
      },
      isValid: { }
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeValue(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  onValid(name, isValid) {
    this.setState({
      ...this.state,
      isValid: {
        ...this.state.isValid,
        [name]: isValid && this.state.form[name] !== ''
      }
    })
  }

  handleSubmit () {
    console.log(this.state);
  }

  render() {
    return (
      <div className="forgot-container">
        <ValidatorForm
          className="forgot-box"
          onSubmit={this.handleSubmit}
          onError={errors => console.log("error", errors, errors[0].isValid())}
        >
          <Box textAlign="center">
            <img src={logoSVG} alt="Ispolink"/>
          </Box>
          <Box textAlign="center">
            Please put in your Email address and we will send you a link to reset your Password.
          </Box>
          <Box>
            <FormControl variant="filled" fullWidth>
              <TextValidator
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="filled"
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                value={this.state.form.email}
                onChange={this.onChangeValue}
                validatorListener={(isValid) => {this.onValid('email', isValid)}}
              />
            </FormControl>
            {this.state.isValid.email ? <Icon className="check-mark">done</Icon> : null }
          </Box>
          <Box>
            <Button
              fullWidth
              className="login-button"
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
              formNoValidate
            >
              Send
            </Button>
          </Box>
          <Box>
            Don't want to reset your Password? <Link href="/login" underline="none">Sign in here!</Link>
          </Box>
        </ValidatorForm>
      </div>
    )
  }
}

export default ForgotPasswordPage;
