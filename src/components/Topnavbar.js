import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SvgComponent1 from './Svgcomponent1';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const OuterCircle = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25px', 
  height: '25px',
  borderRadius: '50%',
  backgroundColor: 'white', 
  padding: '5px',  
  border:'1px solid #CBD7F6'
}));


const NumberCircle = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25px',  
  height: '25px',
  borderRadius: '50%',
  backgroundColor: '#5078E1',  
  color: 'white',  
  fontWeight: 'bold',
}));

const styles = {
  appBar: {
    backgroundColor: 'white',
    borderBottom: '2px solid #E4E8EE',
    boxShadow: 'none', 
  },
  text: {
    color: '#5078E1',
    fontSize: '14px',
  },
};

function Topnavbar() {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={(theme) => ({
        marginLeft:'24px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
        },
      })}>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '2px' }}>
          <Typography variant="h6" sx={styles.text}>
            Add Contact
          </Typography>
          <IconButton size="small" color="inherit">
            <SvgComponent1 />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '2px' }}>
          <Typography variant="h6" sx={styles.text}>
            Lead Details
          </Typography>
          <IconButton size="small" color="inherit">
            <SvgComponent1 />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '2px' }}>
          <Typography variant="h6" sx={styles.text}>
            Preview and Create Lead
          </Typography>
          <IconButton size="small" color="inherit">
            <SvgComponent1 />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '2px' }}>
          <Typography variant="h6" sx={styles.text}>
            Quotation Details
          </Typography>
          <IconButton size="small" color="inherit">
            <SvgComponent1 />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '2px' }}>
          <Typography variant="h6" sx={styles.text}>
            <OuterCircle> 
              <NumberCircle>4</NumberCircle> 
            </OuterCircle>
          </Typography>
          <IconButton size="small" color="inherit">
            <SvgComponent1 />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: '2px' }}>
          <Typography variant="h6" sx={styles.text}>
            Preview and Create
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topnavbar;

