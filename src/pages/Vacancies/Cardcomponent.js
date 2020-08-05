import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DescriptionIcon from '@material-ui/icons/Description';
import { blue } from "@material-ui/core/colors";
import './Cardcomponent.scss';
import { ReactComponent as StarIconOne } from './star-1.svg';
import { ReactComponent as StarIconTwo } from './star-2.svg';
import { ReactComponent as StarIconThree } from './star-3.svg';

export default function OutlinedCard() {

  return (
    <Card className="root" variant="outlined">
      <CardContent>
        <Typography
          className="title"
          color="textSecondary"
        >
          Created 12.04.2020
        </Typography>
        <Typography variant="h4" component="h1">
          CAD and Meshing
          <br />
          Software Developer
          <br />
          (m/f/d)
        </Typography>
        <Typography color="textSecondary" style={{ marginTop: "20px" }}>
          <VisibilityIcon color="primary" style={{ verticalAlign: "middle" }} />
          &nbsp;&nbsp;236 views
        </Typography>
        <Typography color="textSecondary">
          <DescriptionIcon color="primary" style={{ verticalAlign: "sub" }} />
          &nbsp;&nbsp;16 Applications received
        </Typography>
        <Typography style={{ color: 'limegreen'}} >
          <StarIconOne />
          <StarIconThree />
          <StarIconTwo />
          
          &nbsp;&nbsp;Anton DIMITROVA has been hired!
        </Typography>
      </CardContent>
      <CardActions style={{float: 'right' }} >
        <Button color="primary" style={{fontWeight: 'bold'}}>More</Button>
      </CardActions>
    </Card>
  );
}
