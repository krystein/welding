import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {staticImages} from "../data/SlideData";

const ImageViewer = ({reloadGallery}) => {
  const [imageUrls, setImageUrls] = useState([]);


  useEffect(() => {
    const serverUrl = 'https://integratio.000webhostapp.com';

    axios.get(`${serverUrl}/get_images.php`)
    .then((response) => {
      setImageUrls(response.data);
    })
    .catch((error) => {
      return ("Error fetching image URLs:", error);
    });
}, [reloadGallery]);


  return (
    <div className="container mt-5 pt-5 mb-5">
        <div className="row">
            {imageUrls.map((imageUrl, index) => (                
            <div  key={index} className="col-sm-3 col-md-3 col-lg-3 p-2 ">
              <img key={index} src={imageUrl.url} alt={`${index}`} className="img-fluid"/>
            </div>
            ))}
            {staticImages.map((staticImg, index) => (
            <div key={index} className="col-sm-3 col-md-3 col-lg-3 p-2">
              <img src={staticImg.image} alt={`Static ${index}`} className="img-fluid" />
            </div>
          ))}
            </div>
    </div>
  );
};

export default ImageViewer;
