import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './predict.css'

const Predict = (props) => {
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
                  <br></br>
                  <span className="predict-text02">Chinese Medicine (CCM)</span>
                  <br></br>
                  <span>Detector</span>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="predict-border">
              <input
                type="file"
                placeholder="Please upload a .nmp file"
                className="predict-textinput input"
              />
            </div>
            <span className="predict-text06">Please upload a .npy file</span>
            <div className="predict-border1">
              <Link to="/predict" className="predict-navlink1 button">
                <span className="predict-text07">
                  <span>Predict</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="predict-predict">
        <section className="predict-chuan">
          <div className="predict-details">
            <div className="predict-herbs">
              <img alt="pastedImage" src="/pastedimage-vnn7-1200w.png" />
            </div>
            <p className="predict-quote">
              <span className="predict-text10">川芎</span>
              <br className="predict-text11"></br>
              <br className="predict-text12"></br>
              <span>50%</span>
            </p>
          </div>
        </section>
        <section className="predict-bohe">
          <div className="predict-details1">
            <p className="predict-quote1">
              <span className="predict-text14">薄荷</span>
              <br className="predict-text15"></br>
              <br className="predict-text16"></br>
              <span className="predict-text17">10%</span>
              <br></br>
            </p>
            <div className="predict-herbs1">
              <img
                alt="pastedImage"
                src="/pastedimage-g01b-500h.png"
                className="predict-pasted-image2"
              />
            </div>
          </div>
        </section>
        <section className="predict-mudan">
          <div className="predict-details2">
            <div className="predict-herbs2">
              <img
                alt="pastedImage"
                src="/pastedimage-shhl-500h.png"
                className="predict-pasted-image3"
              />
            </div>
            <p className="predict-quote2">
              <span>牡丹皮</span>
              <br className="predict-text20"></br>
              <br className="predict-text21"></br>
              <span>15%</span>
              <br></br>
            </p>
          </div>
        </section>
        <section className="predict-bohe1">
          <div className="predict-details3">
            <p className="predict-quote3">
              <span className="predict-text24">未知</span>
              <br className="predict-text25"></br>
              <br className="predict-text26"></br>
              <span className="predict-text27">25%</span>
              <br></br>
            </p>
            <div className="predict-herbs3">
              <img
                alt="pastedImage"
                src="/55.png"
                className="predict-pasted-image4"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Predict
