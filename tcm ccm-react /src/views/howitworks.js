import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './howitworks.css'

const Howitworks = (props) => {
  return (
    <div className="howitworks-container">
      <Helmet>
        <title>howitworks - TCM CCM</title>
        <meta property="og:title" content="howitworks - TCM CCM" />
      </Helmet>
      <header data-thq="thq-navbar" className="howitworks-navbar">
        <Link to="/" className="howitworks-navlink link">
          &lt; Back
        </Link>
        <img
          alt="pastedImage"
          src="/pastedimage-14js-1500w.png"
          className="howitworks-pasted-image"
        />
      </header>
      <section className="howitworks-hero">
        <div className="howitworks-main">
          <div className="howitworks-video">
            <div className="howitworks-tint"></div>
            <img
              alt="image"
              src="/22.jpg"
              className="howitworks-image"
            />
          </div>
          <div className="howitworks-content">
            <div className="howitworks-center">
              <div className="howitworks-heading">
                <h1 className="howitworks-header">
                  <span className="howitworks-text">
                    Concentrated
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="howitworks-text02">
                    Chinese Medicine (CCM)
                  </span>
                </h1>
                <p className="howitworks-caption">
                  <span className="howitworks-text03">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="howitworks-text04">
                    Concentrated Chinese medicine refers to a form of
                    traditional
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="howitworks-text05"></br>
                  <span className="howitworks-text06">
                    Chinese medicine (TCM) that has been processed or condensed
                    to increase its potency, convenience, or effectiveness for
                    various purposes. TCM encompasses a range of herbal
                    medicine, acupuncture, dietary therapy, and other
                    modalities, and concentrated  Chinese medicine specifically
                    focuses on the herbal aspect.
                  </span>
                  <br className="howitworks-text07"></br>
                  <br className="howitworks-text08"></br>
                  <span className="howitworks-text09">
                    The traditional approach to using Chinese herbs involves
                    decocting  a combination of multiple herbs to create a
                    medicinal soup or tea.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="howitworks-text10"></br>
                  <span className="howitworks-text11">
                    Concentrated Chinese medicine streamlines this process by
                    condensing the herbal formula into a more concentrated form,
                    such as powders, pills, capsules, or liquid extracts.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Howitworks
