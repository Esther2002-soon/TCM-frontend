import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TCM CCM</title>
        <meta property="og:title" content="TCM CCM" />
      </Helmet>
      <section className="home-hero">
        <div className="home-main">
          <div className="home-video">
            <div className="home-tint"></div>
            <img
              alt="pastedImage"
              src="/pastedimage-lte-1500h.png"
              className="home-pasted-image"
            />
          </div>
          <div className="home-content">
            <header data-thq="thq-navbar" className="home-navbar">
              <img
                alt="pastedImage"
                src="/pastedimage-14js-1500w.png"
                className="home-pasted-image1"
              />
              <div data-thq="thq-burger-menu" className="home-menu">
                <div className="home-links">
                  <Link to="/herbs" className="link">
                    Herbs
                  </Link>
                  <Link to="/howitworks" className="home-navlink1 link">
                    How it works
                  </Link>
                  <span className="home-text link">Contact</span>
                </div>
                <button className="home-hamburger button">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav"
                >
                  <div className="home-container1">
                    <img
                      alt="pastedImage"
                      src="/pastedimage-14js-1500w.png"
                      className="home-pasted-image2"
                    />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon2">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav1"
                  >
                    <Link to="/herbs" className="home-text01">
                      Herbs
                    </Link>
                    <Link to="/howitworks" className="home-navlink2">
                      How It Works
                    </Link>
                    <span className="home-text02">
                      <span className="home-text03">Contacts:</span>
                      <br></br>
                      <span>
                      程郁翔 f74096386@gs.ncku.edu.tw
                      </span>
                      <br></br>
                      <span>
                      陳柏淮 f74116275@gs.ncku.edu.tw
                      </span>
                      <br></br>
                      <span>
                      孫以瑭 esthersoon2002@gmail.com
                      </span>
                      <br></br>
                    </span>
                  </nav>
                </div>
              </div>
            </header>
            <div className="home-center">
              <div className="home-heading">
                <h1 className="home-header">
                  <span className="home-text11">
                    Concentrated
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text13">Chinese Medicine (CCM)</span>
                </h1>
                <p className="home-caption">
                  <span className="home-text14">
                    Determination of the amount of constituent in a multi-herb
                    product.
                  </span>
                  <br></br>
                </p>
              </div>
              <div className="home-border">
                <Link to="/predict" className="home-navlink3 button">
                  <span>
                    <span>Try It Now !</span>
                    <br></br>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
