import React from 'react'
import { Box } from '@mui/material'
import Estate from '../estate.png'
import SvgComponent2 from './Svgcomponent2'
import SvgComponent3 from './Svgcomponent3'
import SvgComponent4 from './Svgcomponent4'

function Unitdetails() {
  const styles = {
    unitdetails: {
      width: '35%',
      height: '75vh',
      paddingTop: '15px',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginLeft: '28px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor:'#F5F7FAE6'
    },
    header: {
      color: '#4E5A6B',
      fontWeight: '500',
      paddingBottom: '10px',
    },
    scrollableContent: {
      overflow: 'scroll',
      flex: 1,
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    },
    card: {
      position: 'relative',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E4E8EE',
      borderRadius: '10px',
      marginBottom: '10px',
      padding: '15px',
      width: '48%',
      height: '300px',
      boxSizing: 'border-box',
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    row1: {
      display: 'flex',
      gap: '20px',
      whiteSpace: 'nowrap',
    },
    estateName: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    lap: {
      whiteSpace: 'nowrap',
      color: '#98A0AC',
      fontSize: '12px',
      marginTop: '5px',
      display: 'flex',
      gap: '15px',
    },
    price: (isFirst) => ({
      fontSize: '18px',
      color: isFirst ? '#FF5733' : '#000000',
      fontWeight: 'bold',
    }),
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
      alignItems: 'center',
    },
    iconRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '11px',
    },
    customButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#0084FF',
      marginTop: '10px',
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '16px',
      gap: '5px',
    },
    discountBox: {
      position: 'absolute',
      top: '115px',
      right: '0px',
      backgroundColor: '#FFF4EB',
      color: '#FF9340',
      fontSize: '12px',
      padding: '5px 10px',
      borderRadius: '4px',
    },
    rowContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '10px',
    },
  }

  return (
    <Box sx={styles.unitdetails}>
      <Box sx={styles.header}>Unit Details</Box>
      <Box sx={styles.scrollableContent}>
        <Box sx={styles.rowContainer}>
          {[1, 2, 3, 4].map((item, index) => {
            const isFirst = index === 0;
            return (
              <Box key={index} sx={styles.card}>
                <img
                  src={Estate}
                  alt="Building"
                  style={styles.image}
                />
                {isFirst && <Box sx={styles.discountBox}>% Discount Applied</Box>}
                <div style={styles.row1}>
                  <Box sx={styles.estateName}>Jumeirah Estate</Box>
                  <Box sx={styles.price(isFirst)}>
                    {isFirst ? '$900.00' : '$1,200'}
                  </Box>
                </div>
                <Box sx={styles.lap}>
                  <Box>Jumeirah Golf Estate</Box>
                  <Box sx={{ fontSize: '25px', marginTop: '-10px' }}>•</Box>
                  <Box>2000 Sq.Ft</Box>
                </Box>
                <Box sx={styles.detailsRow}>
                  <Box sx={styles.iconRow}>
                    <Box sx={{ display: 'flex', gap: '7px' }}>
                      <SvgComponent2 />
                      <div style={{ color: '#98A0AC', fontSize: '16px' }}>2</div>
                    </Box>
                    <Box sx={{ fontSize: '25px', marginTop: '-5px', color: '#98A0AC' }}>•</Box>
                    <Box sx={{ display: 'flex', gap: '7px' }}>
                      <SvgComponent3 />
                      <div style={{ color: '#98A0AC', fontSize: '16px' }}>2</div>
                    </Box>
                    <Box sx={{ fontSize: '25px', marginTop: '-5px', color: '#98A0AC' }}>•</Box>
                    <Box sx={{ display: 'flex', gap: '7px' }}>
                      <SvgComponent4 />
                      <div style={{ color: '#98A0AC', fontSize: '16px' }}>2BHK</div>
                    </Box>
                  </Box>
                </Box>
                <Box sx={styles.customButton}>
                  <span style={{fontSize:'28px',marginTop:'-3px'}}>+</span>
                  <span>Customise</span>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Unitdetails