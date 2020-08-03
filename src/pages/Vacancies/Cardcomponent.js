import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 420,
    minHeight: 122,
    maxHeight: 322
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 15
  },
  pos: {
    marginTop: 120,
    marginBottom: 10
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
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
          <VisibilityIcon color="primary" style={{ verticalAlign: "middle" }} />
          &nbsp;&nbsp;16 Applications received
        </Typography>
        <Typography color="textSecondary">
          <VisibilityIcon color="primary" style={{ verticalAlign: "middle" }} />
          &nbsp;&nbsp;16 Applications received
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
