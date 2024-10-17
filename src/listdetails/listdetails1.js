import React from "react";
import Myimage1 from '../house.png';

const Listdetails1 = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const contentWrapperStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const leftSectionStyle = {
    width: "55%",
  };

  const rightSectionStyle = {
    width: "40%",
    border: "1px solid #e0e0e0",
    padding: "10px",
  };

  const imageStyle = {
    width: "500px",
    height: "auto",
    borderRadius: "10px",
  };

  const specsStyle = {
    display: "flex",
    gap: "15px",
    margin: "15px 0",
  };

  const specStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const pricingRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
  };

  const discountRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
    color: "#888",
  };

  const finalTotalStyle = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2em",
    fontWeight: "bold",
    paddingTop: "10px",
  };

  const linkStyle = {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  };

  const dividerStyle = {
    width: "100%",
    border: "1px solid #e0e0e0",
    margin: "20px 0",
  };

  return (
    <div style={containerStyle}>
      {/* Unit Details Header */}
      <h2>Unit Details</h2>

      {/* Full-width Divider */}
      <hr style={dividerStyle} />

      {/* Content Wrapper for Left Section and Right Section */}
      <div style={contentWrapperStyle}>
        {/* Left Section */}
        <div style={leftSectionStyle}>
          {/* Image */}
          <div>
            <img
              src={Myimage1}
              alt="Jumeirah Estate"
              style={imageStyle}
            />
          </div>

          {/* Unit Information */}
          <h2>Jumeirah Estate</h2>
          <span>UNT-1234</span>
          <p>Rubix Apartment, K Tower, Floor 1</p>

          {/* Unit Specifications */}
          <div style={specsStyle}>
            <div style={specStyle}>
              <i className="icon-bed" /> 2 Beds
            </div>
            <div style={specStyle}>
              <i className="icon-bath" /> 2 Baths
            </div>
            <div style={specStyle}>
              <i className="icon-home" /> 2BHK
            </div>
            <div style={specStyle}>
              <i className="icon-size" /> 2000 Sq.Ft
            </div>
          </div>

          {/* Handbook */}
          <div style={specStyle}>
            <i className="icon-book" /> Handbook
            <a href="/path-to-handbook" style={linkStyle}>
              View / Download
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div style={rightSectionStyle}>
          <div>
            <div style={pricingRowStyle}>
              <span>Bill Name Here</span>
              <span>$1,000</span>
            </div>
            <div style={discountRowStyle}>
              <span>Discount</span>
              <span>10%</span>
            </div>
            <div style={pricingRowStyle}>
              <span>Bill Name Here</span>
              <span>$1,000</span>
            </div>
            <div style={discountRowStyle}>
              <span>Discount</span>
              <span>10%</span>
            </div>
            <div style={pricingRowStyle}>
              <span>Bill Name Here</span>
              <span>$1,000</span>
            </div>
            <div style={pricingRowStyle}>
              <span>Bill Name Here</span>
              <span>$1,000</span>
            </div>
            <div style={pricingRowStyle}>
              <span>Bill Name Here</span>
              <span>$1,000</span>
            </div>
          </div>

          <div style={finalTotalStyle}>
            <span>Final Total</span>
            <span>$1,200</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listdetails1; 

