import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DescriptionIcon from "@material-ui/icons/Description";
import "./Cardcomponent.scss";
import { ReactComponent as StarIconOne } from "./star-1.svg";
import { ReactComponent as StarIconTwo } from "./star-2.svg";
import { ReactComponent as StarIconThree } from "./star-3.svg";
// import { render } from "@testing-library/react";

class Cardcomponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography className="title" color="textSecondary">
            Created {this.props.createdDate}
          </Typography>
          <Typography variant="h4" component="h1">
            CAD and Meshing
            <br />
            Software Developer
            <br />
            (m/f/d)
          </Typography>
          <Typography color="textSecondary" style={{ marginTop: "20px" }}>
            <VisibilityIcon
              color="primary"
              style={{ verticalAlign: "middle" }}
            />
            &nbsp;&nbsp;{this.props.viewsNum} views
          </Typography>
          <Typography color="textSecondary" style={{ marginTop: "13px" }}>
            <DescriptionIcon color="primary" style={{ verticalAlign: "sub" }} />
            &nbsp;&nbsp;{this.props.appReceivedNum} Applications received
          </Typography>
          <Typography
            style={{
              color: "limegreen",
              marginTop: "9.3px",
              marginLeft: "3px"
            }}
          >
            <StarIconOne style={{ paddingBottom: "12px" }} />
            <StarIconThree
              style={{ marginLeft: "-4px", marginRight: "-1px" }}
            />
            <StarIconTwo style={{ paddingBottom: "9px" }} />
            &nbsp;&nbsp;Anton DIMITROVA has been hired!
          </Typography>
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <Button color="primary" style={{ fontWeight: "bold" }}>
            More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Cardcomponent;
