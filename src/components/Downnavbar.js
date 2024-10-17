import React from 'react';
import { Box, Button } from '@mui/material';

function Downnavbar() {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        leftButton: {
            color: '#000',
            border: '1px solid #E4E8EE',
            borderRadius: '8px',
            padding: '10px 16px',
            backgroundColor: '#FFF',
            marginLeft: '20px',
            textTransform: 'capitalize',
        },
        cancelButton: {
            color: '#000',
            border: '1px solid #E4E8EE',
            borderRadius: '8px',
            padding: '10px 16px',
            marginRight: '8px',
            backgroundColor: '#FFF',
            textTransform: 'capitalize',
        },
        createButton: {
            backgroundColor: '#3F82F6',
            color: '#FFF',
            padding: '10px 16px',
            borderRadius: '8px',
            '&:hover': {
                backgroundColor: '#3367D6',
            },
            textTransform: 'capitalize',
        },
    };

    return (
        <Box sx={styles.container}>
            <Button sx={styles.leftButton}>Previous</Button>
            <Box>
                <Button sx={styles.cancelButton}>Cancel</Button>
                <Button sx={styles.createButton}>Create Quotation</Button>
            </Box>
        </Box>
    );
}

export default Downnavbar;
