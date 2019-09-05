import React from "react";
import moment from "moment";

// material ui styles import
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Divider from "@material-ui/core/Divider";
// styles for this page
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 380
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const BookingCard = props => {
  const classes = useStyles();
  let cardBody =
    "Session on " +
    props.course +
    " at " +
    moment.unix(props.createdAt.seconds).format("MMMM Do YYYY, h:mm:ss a");
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>NM</Avatar>}
        title="Naresh"
        subheader={moment.unix(props.createdAt.seconds).fromNow()}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cardBody}
        </Typography>
      </CardContent>
      <Divider />
      <div className="card-footer">
        <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="location">
          <i className="fas fa-location-arrow" />
          <div>{props.location}</div>
        </IconButton>
      </div>
    </Card>
  );
};

export default BookingCard;
