import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// import Select from "react-select";
// <Select
//   id={id}
//   placeholder={id}
//   options={options}
//   onChange={e => onChange(e, id)}
// />

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
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
  console.log(id);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
        {name}
      </InputLabel>
      <Select
        value={value}
        onChange={onChange}
        input={<OutlinedInput labelWidth={labelWidth} name={name} id={id} />}
      >
        {options.map(curr => {
          return <MenuItem value={curr.value}>{curr.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default RenderSelect;
