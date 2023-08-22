import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { MarginOutlined, Search } from '@mui/icons-material'; // Import the Search icon

import useStyles from './styles';
import { colors } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>

          <Typography variant="h5"    className={classes.title}>
            Travel advisor
          </Typography>

          <Box display="flex">

            <Typography variant="h6" color="white" className={classes.title}>
              Explore new places
            </Typography>


            <div className={classes.search} style={{ width: 500 }}> 
            
                {/* <Search /> */}
              <InputBase 
                placeholder=" search...."
                classes={{ root: classes.inputRoot, input: classes.inputInput } }
              />

            </div>
          </Box>

        </Toolbar>

      </AppBar>
    </div>
  );
};

export default Header;
