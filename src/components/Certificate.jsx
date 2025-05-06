import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
      <div className="page-header">
          <h1 className="page-title">My Certifications</h1> {/* Added Title */}
        </div>
        <div className="certificate-image-container">
          <img 
            src="Data Science.jpg" 
            alt="Data Science Certificate" 
            className="certificate-image"
            onClick={() => openImage("Data Science.jpg")}
          />
          <img 
            src="App Builder.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
               <img 
            src="Business.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
        </div>
        <div className="certificate-image-container">
                 <img 
            src="Libraries.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
                  <img 
            src="Dev Tools.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
                  <img 
            src="Excel.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
       
          
          

        </div>
        <div className="certificate-image-container">
                 <img 
            src="Machine Learning.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
                  <img 
            src="Machine.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
                  <img 
            src="Power Bi.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
       
          
          

        </div>
        <div className="certificate-image-container">
      
                  <img 
            src="Python.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
                  <img 
            src="React.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
                     <img 
            src="Visualization.jpg" 
            alt="App Builder Certificate" 
            className="certificate-image"
            onClick={() => openImage("App Builder.jpg")}
          />
       
          
          

        </div>
        {selectedImage && (
          <div className="popup" onClick={closeImage}>
            <span className="close">&times;</span>
            <img src={selectedImage} alt="Certificate Preview" className="popup-content" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificates;
