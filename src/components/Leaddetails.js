import React from 'react';
import Myimage from '../imagee.jpg'
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';

function Leaddetails() {
  const styles = {
    container: {
      padding: '15px',
      marginLeft: '28px',
      width: '31%',
      height: '73vh',
    },
    details: {
      border: '1px solid #E4E8EE', 
      backgroundColor: '#FFFFFF', 
      borderRadius: '4px', 
      opacity: 1, 
      marginRight: '10px',
      marginTop: '6px',
      padding:'10px', 
      height: '65px',
      display:'flex',
      alignItems:'center',
    },
    roundedimage: {
      width: '58px',
      height: '58px', 
      borderRadius: '10px', 
      boxShadow: '0px 3px 16px #0000001F',
      marginRight:'15px',
      marginTop:'-6px',
    },
    leadInfo: {
      display: 'flex',
      flexDirection: 'column',
      color:'#4E5A6B',
      fontWeight:'500',
      marginTop:'-10px'
    },
    name: {
      font: 'normal normal bold 14px/19px Nunito Sans',
      letterSpacing: '-0.11px',
      font: 'var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-nunito-sans)',
      color: 'var(--primary-text-091b29)',
      fontWeight:'500',
      },
    status: {
      fontSize: '12px',
      backgroundColor: '#5078E11E',
      color: '#091B29',
      padding: '2px 6px',
      borderRadius: '4px',
      marginLeft: '8px',
      fontWeight:'500'
    },
    contactInfo: {
      fontSize: '14px',
      color: '#5E6C84',
    },
    twoRow:{
      marginTop:'5px'
    },
    topRow: {
      display: 'flex',
      alignItems: 'center',
      position:'relative',
      top:'1px'
    },
    downRow:{
      display:'flex',
      alignItems:'center',
      position:'relative',
      top:'-17px',
      gap:'3px',
    },
    dot:{
      fontSize: '20px',
      color: '#CED3DD',
      margin: '0 8px',
    },
    divider:{
      position:'relative',
      top:'21.5px',
      marginRight:'10px'
    },
    leadInfo1:{
      position:'relative',
      top:'40px',
      color:'#4E5A6B',
      fontWeight:'500'
    },
    leasedates:{
      position:'relative',
      top:'50px',
      fontSize:'11px',
      color:'#98A0AC',
      display:'flex',
      gap:'70px',
      marginRight:'15px'
    },
    dates1:{
      position:'relative',
      top:'35px',
      fontSize:'14px',
      left:'2px',
      color:'#091B29',
      display:'flex',
      gap:'100px',
      fontWeight:'500'
    },
    gracePeriod:{
      fontSize:'11px',
      color:'#98A0AC',
      position:'relative',
      top:'50px'
    },
    beginning:{
      position:'relative',
      top:'45px',
      display:'flex',
      left:'2px',
    },
    beginning1:{
      fontSize:'14px',
      fontWeight:'500'
    },
    beginning2:{
      fontSize:'14px',
      color:'#98A0AC',
    },
  };

  return (
    <div style={styles.container}>
        <div style={styles.leadInfo}>
            <p>Lead Details</p>
        </div>
        <div style={styles.details}>
            <Avatar alt='Profile' src={Myimage} sx={styles.roundedimage}/>
            <div style={styles.twoRow}>
             <div style={styles.topRow}>
               <p style={styles.name}>Tom Cruise</p>
               <span style={styles.status}>Prospect</span>
              </div>
              <div style={styles.downRow}>
              <p style={styles.contactInfo}>+91 9090808012</p>
              <span style={styles.dot}>•</span>
              <p style={styles.contactInfo}>Tomcruise2515@mail.com</p>
              </div>
          </div>
        </div>
        <Divider orientation="horizontal" flexItem sx={styles.divider} />
        <div style={styles.leadInfo1}>
          Quotation Details
        </div>
        <div style={styles.leasedates}>
          <p>LEASE START DATE</p>
          <p>LEASE END DATE</p>
          <p>RENT START DATE</p>
        </div>
        <div style={styles.dates1}>
        <p>30 Jan 22</p>
        <p>30 Jan 23</p>
        <p>30 Jan 23</p>
        </div>
        <div></div>
        <div style={styles.gracePeriod}>
          GRACE PERIOD
        </div>
        <div style={styles.beginning}>
          <p style={styles.beginning1}>90 Days</p>
          <p style={styles.beginning2}>(Beginning)</p>
        </div>
    </div>
  );
}

export default Leaddetails;