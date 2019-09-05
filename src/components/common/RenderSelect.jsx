import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120
  },
  selectWidth: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const RenderSelect = props => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const { id, options, onChange, name, value } = props;

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor={name}>
          {name}
        </InputLabel>
        <Select
          value={value}
          style={{ width: "100%" }}
          onChange={onChange}
          input={<OutlinedInput labelWidth={labelWidth} name={name} id={id} />}
        >
          {options.map(curr => {
            return (
              <MenuItem key={curr.value} value={curr.value}>
                {curr.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default RenderSelect;
