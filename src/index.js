import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Topnavbar from './components/Topnavbar';
import Leaddetails from './components/Leaddetails';
import Unitdetails from './components/Unitdetails';
import Summary from './components/Summary';
import Downnavbar from './components/Downnavbar';
import Listdetails1 from './listdetails/listdetails1';
import PricingTable from './listdetails/listdetails2';
import AddAmenitiesDialog from './listdetails/listdetails3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topnavbar />
    <div style={{display:'flex'}}>
    <Leaddetails/>
    <Unitdetails/>
    <Summary/>
    </div>
    <Downnavbar/>
    {/* <Listdetails1/> */}
    {/* <PricingTable/> */}
     {/* <AddAmenitiesDialog/>  */}
  </React.StrictMode>   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
