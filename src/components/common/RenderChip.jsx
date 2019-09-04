import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const RenderChip = props => {
  const classes = useStyles();
  const { intials, label, handleClick, active } = props;

  const conditionalAvatar = () => {
    if (intials && active) {
      return (
        <Chip
          avatar={<Avatar>{intials}</Avatar>}
          label={label}
          onClick={handleClick}
          className={classes.chip}
          variant="outlined"
          color="secondary"
        />
      );
    } else if (!intials && active) {
      return (
        <Chip
          color="secondary"
          label={label}
          className={classes.chip}
          onClick={handleClick}
          variant="outlined"
        />
      );
    } else if (intials && !active) {
      return (
        <Chip
          avatar={<Avatar>{intials}</Avatar>}
          label={label}
          className={classes.chip}
          onClick={handleClick}
          variant="outlined"
        />
      );
    } else if (!intials && !active) {
      return (
        <Chip
          label={label}
          className={classes.chip}
          onClick={handleClick}
          variant="outlined"
        />
      );
    }
  };

  return <div className={classes.root}>{conditionalAvatar()}</div>;
};
export default RenderChip;
