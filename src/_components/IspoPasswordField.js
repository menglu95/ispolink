import React, { Component } from "react";
import { InputAdornment, withStyles } from '@material-ui/core';
import { TextValidator} from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    '& .MuiInputAdornment-root': {
      cursor: 'pointer',
    }
  }
});

class IspoPasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true,
    };
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

  render() {
    const { passwordIsMasked } = this.state;

    return (
      <TextValidator
        type={passwordIsMasked ? 'password' : 'text'}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon
                onClick={this.togglePasswordMask}
              >
                {!passwordIsMasked? 'visibility' : 'visibility_off'}
              </Icon>
            </InputAdornment>
        ),
        }}
      />
    );
  }
}

IspoPasswordField.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

IspoPasswordField = withStyles(styles)(IspoPasswordField);

export default IspoPasswordField;