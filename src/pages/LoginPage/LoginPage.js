import React, { Component } from 'react';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import FormControl from "../../_components/IspoFormControl";

import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as GoogleIcon } from './google.svg';

import "./LoginPage.scss"

const logoSVG = require('../../assets/images/svgs/ispolink_logo_blue.svg');


class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        username: '',
        password: '',
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
      <div className="login-container">
        <ValidatorForm
          className="login-box"
          onSubmit={this.handleSubmit}
          onError={errors => console.log("error", errors, errors[0].isValid())}
        >
          <Box textAlign="center">
            <img src={logoSVG} alt="Ispolink"/>
          </Box>
          <Box>
            <FormControl variant="filled" fullWidth>
              <TextValidator
                fullWidth
                name="username"
                label="Username or Email"
                variant="filled"
                validators={['required']}
                errorMessages={['This field is required']}
                value={this.state.form.username}
                validatorListener={(isValid) => {this.onValid('username', isValid)}}
                onChange={this.onChangeValue}
              />
            </FormControl>
            {this.state.isValid.username ? <Icon className="check-mark">done</Icon> : null }
          </Box>
          <Box>
            <FormControl variant="filled" fullWidth>
              <TextValidator
                fullWidth
                name="password"
                label="Password"
                variant="filled"
                validators={['required']}
                errorMessages={['This field is required']}
                value={this.state.form.password}
                validatorListener={(isValid) => {this.onValid('password', isValid)}}
                onChange={this.onChangeValue}
              />
            </FormControl>
            {this.state.isValid.password ? <Icon className="check-mark">done</Icon> : null }
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Stay logged in?"
            />
            <Link href="/forgot" underline="none">
              Forgot Password
            </Link>
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
              Sign in
            </Button>
          </Box>
          <Box textAlign="center">
            or sign up with
          </Box>
          <Box>
            <Button
              className="linkedin-button"
              variant="contained"
              startIcon={<LinkedinIcon />}
              disableElevation>
              LinkedIn
            </Button>
            <Button
              className="google-button"
              variant="contained"
              startIcon={<GoogleIcon />}
              disableElevation>
              Google
            </Button>
          </Box>
          <Box>
            You don't have an Account? <Link href="/signup" underline="none">Register now!</Link>
          </Box>
        </ValidatorForm>
      </div>
    )
  }
}

export default LoginPage;
