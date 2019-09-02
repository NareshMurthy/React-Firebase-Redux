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

// styles for this page
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },

  avatar: {
    backgroundColor: red[500]
  }
}));

const BookingCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>NM</Avatar>}
        title={props.course}
        subheader={moment.unix(props.createdAt.seconds).fromNow()}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum lorem ipsum.Lorem ipsum lorem ipsum.Lorem ipsum lorem
          ipsum.Lorem ipsum lorem ipsum.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BookingCard;
