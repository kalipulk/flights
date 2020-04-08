import React, { Component } from "react";
// import "./style.css";

const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      width: '300px'
    };
    
    return (
        <div className="image-slide" style={styles}></div>
    );
}
export default ImageSlide;