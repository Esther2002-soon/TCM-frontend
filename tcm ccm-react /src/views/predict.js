import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './predict.css';

const Predict = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://34.81.60.246:8000/uploadfile/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setUploadResult(result);
    } catch (error) {
      console.error('Error:', error);
      setUploadResult({ error: error.message });
    }
  };

  const formatResult = (result) => {
    if (!result || result.error) {
      return <div className="error">Upload failed! Error: {result?.error}</div>;
    }

    const formattedResult = [];
    const predictions = result.result.slice(0, 3);
    const medicines = result.result.slice(3);

    predictions.forEach((prediction, index) => {
      formattedResult.push(
        <div key={index}>
          <p>Medicine {index + 1}:</p>
          <h1>{medicines[index]}</h1>
          <p>Confusion Matrix:</p>
          <p>{prediction.join(',\n')}</p>
          <br></br>
        </div>
      );
    });

    return formattedResult;
  };

  return (
    <div className="predict-container">
      <Helmet>
        <title>predict - TCM CCM</title>
        <meta property="og:title" content="predict - TCM CCM" />
      </Helmet>
      <header data-thq="thq-navbar" className="predict-navbar">
        <Link to="/" className="predict-navlink link">
          &lt; Back
        </Link>
        <img
          alt="pastedImage"
          src="/pastedimage-14js-1500w.png"
          className="predict-pasted-image"
        />
      </header>
      <section className="predict-hero">
        <div className="predict-main">
          <div className="predict-video">
            <div className="predict-tint"></div>
            <img
              alt="image"
              src="/33.jpg"
              className="predict-image"
            />
          </div>
          <div className="predict-content">
            <div className="predict-center">
              <div className="predict-heading">
                <h1 className="predict-header">
                  <span className="predict-text">
                    Concentrated
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br />
                  <span className="predict-text02">Chinese Medicine (CCM)</span>
                  <br />
                  <span>Detector</span>
                  <br />
                </h1>
              </div>
            </div>
            <div className="predict-border">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                placeholder="Please upload a .nmp file"
                className="predict-textinput input"
              />
            </div>
            <span className="predict-text06">Please upload a .npy file</span>
            <div className="predict-border1">
              <button className="predict-navlink1 button" onClick={handleUpload}>
                Predict
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="predict-predict">
        <section className="predict-chuan">
            <div className="result">
              {uploadResult && formatResult(uploadResult)}
            </div>
        </section>
      </section>
    </div>
  );
};
export default Predict;
