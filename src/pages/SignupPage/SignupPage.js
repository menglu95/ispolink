import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import MenuItem from "@material-ui/core/MenuItem";
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import zxcvbn from "zxcvbn";
import FormControl from "../../_components/IspoFormControl";
import IspoPasswordField from "../../_components/IspoPasswordField";


const logoSVG = require('../../assets/images/svgs/ispolink_logo_blue.svg');

class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        accountType: '',
        username: '',
        email: '',
        password: '',
        confirmed: ''
      },
      isValid: {
      },
      scorePassword: 0
    }

    this.onChangeValue = this.onChangeValue.bind(this);
    this.setScorePassword = this.setScorePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.form.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule('isPasswordMatch');
  }

  onChangeValue(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value
      }
    }, () => {
      if (name === 'password') {
        this.setScorePassword(this.state.form.password);
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

  setScorePassword(password) {
    let score = 0;
    let result = zxcvbn(password);
    ({ score } = result);
    this.setState({
      ...this.state,
      scorePassword: score
    })
  }

  handleSubmit () {
    console.log(this.state);
  }

  render() {
    const passwordLabels = [ 'Weak', 'Weak', 'Poor', 'Good', 'Strong' ];
    return (
      <div className="signup-container">
        <ValidatorForm
          className="signup-box"
          onSubmit={this.handleSubmit}
        >
          <Box textAlign="center">
            <img src={logoSVG} alt="Ispolink"/>
          </Box>
          <Box>
            <FormControl variant="filled" fullWidth>
              <SelectValidator
                name="accountType"
                label="Account Type"
                variant="filled"
                validators={['required']}
                errorMessages={['This field is required']}
                value={this.state.form.accountType}
                onChange={this.onChangeValue}
                validatorListener={(isValid) => {this.onValid('accountType', isValid)}}
              >
                <MenuItem value='jobseeker'>Job Seeker</MenuItem>
                <MenuItem value='employer'>Employer</MenuItem>
              </SelectValidator>
            </FormControl>
            {this.state.isValid.accountType ? <Icon className="check-mark">done</Icon> : null }
          </Box>
          <Box>
            <FormControl variant="filled" fullWidth>
              <TextValidator
                fullWidth
                name="username"
                label="Username"
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
            <FormControl variant="filled" fullWidth>
              <IspoPasswordField
                fullWidth
                name="password"
                label="Password"
                variant="filled"
                validators={['required']}
                errorMessages={['This field is required']}
                value={this.state.form.password}
                onChange={this.onChangeValue}
                validatorListener={(isValid) => {this.onValid('password', isValid)}}
              />
              <div className="strength-bar">
                <div>
                  {passwordLabels[this.state.scorePassword]}
                </div>
                {[1, 2, 3, 4].map((el) => {
                  return (
                    <div className={el <= this.state.scorePassword ? 'active' : ''} key={el}></div>
                  );
                })}
              </div>
            </FormControl>
            {this.state.isValid.password ? <Icon className="check-mark">done</Icon> : null }
          </Box>
          <Box>
            <FormControl variant="filled" fullWidth>
              <IspoPasswordField
                fullWidth
                name="confirmed"
                label="Confirm Password"
                variant="filled"
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'This field is required']}
                value={this.state.form.confirmed}
                onChange={this.onChangeValue}
                validatorListener={(isValid) => {this.onValid('confirmed', isValid)}}
              />
            </FormControl>
            {this.state.isValid.confirmed ? <Icon className="check-mark">done</Icon> : null }
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="I do accept the"
            />
            <Link href="#" underline="none" onClick={this.preventDefault}>
              Terms & Conditions
            </Link>
          </Box>
          <Box>
            <Button
              fullWidth
              className="signup-button"
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
              formNoValidate
            >
              Sign up
            </Button>
          </Box>
          <Box>
            You already have an Account? <Link href="/login" underline="none">Sign in here!</Link>
          </Box>
        </ValidatorForm>
      </div>
    )
  }
}

export default SignupPage;
