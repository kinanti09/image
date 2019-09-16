import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  input: {
    display: 'none',
  },
}));

export default function SearchBar() {
  const classes = useStyles();


  return (
    <div className={classes.container}>
        <TextField
            id="name"
            type="text"
            style={{ margin: 8 }}
            placeholder="Search"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
        />
    </div>
  );
}