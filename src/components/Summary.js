import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

function Summary() {
    const styles = {
        summary: {
            height: '75vh',
            paddingTop: '15px',
            paddingRight: '15px',
            paddingLeft: '10px',
            marginLeft: '20px',
            marginRight: '5px',
            display: 'flex',
            flexDirection: 'column',
        },
        main: {
            backgroundColor: '#F5F7FA',
            height: '73vh',
            width: '400px',
            marginLeft: '-9px',
            marginTop: '16px',
        },
        heading: {
            color: '#4E5A6B',
            fontWeight: '500',
            paddingBottom: '10px',
            marginLeft: '-9px',
        },
        tableRow: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 0',
            fontSize: '14px',
            paddingTop: '10px',
            paddingLeft: '12px',
            paddingRight: '12px',
        },
        column1: {
            color: '#4E5A6B',
            fontWeight: '500',
            textAlign: 'left',
            width: '40%',  
        },
        column2: {
            color: '#4E5A6B',
            textAlign: 'left',
            width: '20%',  
        },
        amount: {
            fontWeight: '500',
            color: '#091B29',
            textAlign: 'right',  
            width: '30%', 
        },
        footer: {
            marginTop: 'auto',
            paddingTop: '10px',
        }
    };

    return (
        <Box sx={styles.summary}>
            <Typography sx={styles.heading}>Quotation Summary</Typography>

            <Box sx={styles.main}>
                <Box sx={styles.tableRow}>
                    <span style={{fontSize:'12px',color:'#98A0AC'}}>DESCRIPTION</span>
                    <span style={{fontSize:'12px',color:'#98A0AC'}}>QUANTITY</span>
                    <span style={{fontSize:'12px',color:'#98A0AC'}}>AMOUNT</span>
                </Box>
                <Divider sx={{ border: '1px solid #E4E8EE' }} />

                <Box sx={styles.tableRow}>
                    <span style={styles.column1}>Total Amount</span>
                    <span style={styles.column2}>3</span>
                    <span style={styles.amount}>$3,600.00</span>
                </Box>

                <Box sx={styles.tableRow}>
                    <span style={styles.column1}>Total Discount</span>
                    <span style={styles.column2}>10%</span>
                    <span style={{ color: '#4E5A6B', fontWeight: '400', textAlign: 'right', width: '30%' }}>-$100.00</span>
                </Box>
                <Divider sx={{ border: '1px solid #E4E8EE' }} />

                <Box sx={styles.tableRow}>
                    <span style={styles.column1}>Total Refundable</span>
                    <span style={styles.column2}>0%</span>
                    <span style={styles.amount}>$0</span>
                </Box>
                <Divider sx={{ border: '1px solid #E4E8EE' }} />

                <Box sx={styles.tableRow}>
                    <span style={styles.column1}>Total Tax</span>
                    <span style={styles.column2}>18%</span>
                    <span style={styles.amount}>$648.00</span>
                </Box>
                <Divider sx={{ border: '1px solid #E4E8EE' }} />

                <Divider sx={{ border: '1px solid #E4E8EE', marginTop: '230px' }} />
                <Box sx={styles.footer}>
                    <Box sx={styles.tableRow}>
                        <span style={{fontSize:'16px',color:'#091B29',fontWeight:'600'}}>Quote Amount</span>
                        <span style={{fontSize:'16px',color:'#091B29',fontWeight:'600'}}>$4,148.00</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Summary;

