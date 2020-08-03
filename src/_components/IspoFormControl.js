import { withStyles } from '@material-ui/core'
import variables from '../assets/css/variables/_colors.scss'
import FormControl from "@material-ui/core/FormControl";

const IspoFormControl = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiInputBase-root': {
      backgroundColor: 'white',
      border: '1px solid ' + variables.ispo_gray_20,
      borderRadius: '4px',
      margin: '1px',
      '&:hover': {
        border: '1px solid ' + variables.primary_color,
        '& input': {
          cursor: 'pointer'
        }
      },
      '&.Mui-focused': {
        border: '2px solid ' + variables.primary_color,
        margin: '0px',
        '& input': {
          cursor: 'text !important'
        }
      },
      '&.Mui-error': {
        border: '2px solid ' + variables.ispo_warning_red
      },
      '& input[aria-invalid="false"]:not([value=""])': {
      }
    },
    '& .MuiFormLabel-filled': {
      color: variables.primary_color
    },
    '& .MuiFilledInput-underline': {
      '&:before': {
        borderBottom: 0
      },
      '&:after': {
        borderBottom: 0
      }
    }
  },
})(FormControl);

export default IspoFormControl;
