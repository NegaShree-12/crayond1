
import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  Divider,
  Badge
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const PricingTable = () => {
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false); 
  };

  const pricingItems = [
    { number: '01', title: 'Primary', bgcolor: '#FFE8E8' ,color:'#b3776d' },
    { number: '02', title: 'Secondary', bgcolor: '#F0E9FF',color:'#896db3' },
    { number: '03', title: 'One Time Charges', bgcolor: '#E7F8F8',color:'#6dafb3'  },
    { number: '04', title: 'Refundables', bgcolor: '#F9F1F1', color:'#6d80b3' },
    { number: '05', title: 'Inventory Item', bgcolor: '#FFF9E3', color:'#b3a16d' },
    { number: '06', title: 'Parking Slot', bgcolor: '#FFECEC', color:'#b3776d' },
  ];

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontFamily: "Nunito Sans" }}>
        Pricing Table
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <List>
        {pricingItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: item.bgcolor,
              borderRadius: 2,
              my: 1,
              px: 2,
              width: '390px',
              height: '70px',
              boxSizing: 'border-box',
              marginLeft: '25px',
              marginRight: '25px',
              marginBottom: '10px',
              fontFamily: "Nunito Sans",
            }}
          >
            <ListItemIcon>
              <Badge
                badgeContent={item.number}
                overlap="circular"
                sx={{
                  mr: 1,
                  ml: 3,
                  '& .MuiBadge-badge': {
                    backgroundColor: item.color,
                    color: '#fff',
                    fontWeight: 'light',
                    width: '23px',
                    height: '23px',
                    borderRadius: '50%',
                    fontSize: '10px',
                    fontFamily: "Nunito Sans",
                  }
                }}
              />
            </ListItemIcon>
            
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontSize: '14px',
                fontWeight: 'medium',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: item.color,
                fontFamily: "Nunito Sans",
              }}
            />
            <InfoOutlinedIcon sx={{ color: '#dddde4', paddingRight: '10px', fontSize: '20px' }} />
            <KeyboardArrowRightIcon sx={{ color: item.color }} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default PricingTable;