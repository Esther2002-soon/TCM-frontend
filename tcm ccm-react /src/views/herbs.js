import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './herbs.css'

const Herbs = (props) => {
  return (
    <div className="herbs-container">
      <Helmet>
        <title>herbs - TCM CCM</title>
        <meta property="og:title" content="herbs - TCM CCM" />
      </Helmet>
      <header data-thq="thq-navbar" className="herbs-navbar">
        <Link to="/" className="herbs-navlink link">
          &lt; Back
        </Link>
        <img
          alt="pastedImage"
          src="/pastedimage-14js-1500w.png"
          className="herbs-pasted-image"
        />
      </header>
      <section className="herbs-hero">
        <section className="herbs-chuan">
          <div className="herbs-details">
            <div className="herbs-herbs">
              <img alt="pastedImage" src="/pastedimage-vnn7-1200w.png" />
            </div>
            <p className="herbs-quote">
              <span className="herbs-text">川芎</span>
              <br className="herbs-text001"></br>
              <br className="herbs-text002"></br>
              <span className="herbs-text003">【性味歸經】</span>
              <br className="herbs-text004"></br>
              <span className="herbs-text005">辛，溫。歸肝、膽、心包經。</span>
              <br className="herbs-text006"></br>
              <br className="herbs-text007"></br>
              <span className="herbs-text008">【功效】</span>
              <br className="herbs-text009"></br>
              <span className="herbs-text010">活血行氣，祛風止痛。</span>
            </p>
          </div>
        </section>
        <section className="herbs-jie">
          <div className="herbs-details01">
            <p className="herbs-quote01">
              <span>桔梗</span>
              <br className="herbs-text012"></br>
              <br className="herbs-text013"></br>
              <span>【性味歸經】</span>
              <br className="herbs-text015"></br>
              <span>苦、辛，平。歸肺經。</span>
              <br className="herbs-text017"></br>
              <br className="herbs-text018"></br>
              <span>【功效】</span>
              <br className="herbs-text020"></br>
              <span>宣肺化痰，利咽，排膿。</span>
              <br></br>
            </p>
            <div className="herbs-herbs01">
              <img
                alt="pastedImage"
                src="/pastedimage-lm4q-500h.png"
                className="herbs-pasted-image02"
              />
            </div>
          </div>
        </section>
        <section className="herbs-mudan">
          <div className="herbs-details02">
            <div className="herbs-herbs02">
              <img
                alt="pastedImage"
                src="/pastedimage-shhl-500h.png"
                className="herbs-pasted-image03"
              />
            </div>
            <p className="herbs-quote02">
              <span>牡丹皮</span>
              <br className="herbs-text024"></br>
              <br className="herbs-text025"></br>
              <span>【性味歸經】</span>
              <br className="herbs-text027"></br>
              <span>苦、辛，微寒。歸心、肝、腎經。</span>
              <br className="herbs-text029"></br>
              <br className="herbs-text030"></br>
              <span>【功效】</span>
              <br className="herbs-text032"></br>
              <span>清熱涼血，活血散瘀。</span>
            </p>
          </div>
        </section>
        <section className="herbs-gan">
          <div className="herbs-details03">
            <p className="herbs-quote03">
              <span>甘草</span>
              <br></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>甘，平。歸心、肺、脾、胃經。</span>
              <br></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span>益氣補中，清熱解毒，祛痰止咳，緩急止痛，調和藥性。</span>
              <br></br>
            </p>
            <div className="herbs-herbs03">
              <img
                alt="pastedImage"
                src="/pastedimage-ys0s-500h.png"
                className="herbs-pasted-image04"
              />
            </div>
          </div>
        </section>
        <section className="herbs-dang">
          <div className="herbs-details04">
            <div className="herbs-herbs04">
              <img alt="pastedImage" src="/pastedimage-al3g-1200w.png" />
            </div>
            <p className="herbs-quote04">
              <span>當歸</span>
              <br className="herbs-text047"></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>甘、辛，溫。歸肝、心、脾經。</span>
              <br className="herbs-text052"></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span>補血，活血，調經，止痛，潤腸。</span>
            </p>
          </div>
        </section>
        <section className="herbs-baishu">
          <div className="herbs-details05">
            <p className="herbs-quote05">
              <span>白朮</span>
              <br className="herbs-text058"></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>苦、甘，溫。歸脾、胃經。</span>
              <br className="herbs-text063"></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span> 補氣健脾，燥濕利水，止汗，安胎。</span>
              <br></br>
            </p>
            <div className="herbs-herbs05">
              <img
                alt="pastedImage"
                src="/pastedimage-o3ya-500h.png"
                className="herbs-pasted-image06"
              />
            </div>
          </div>
        </section>
        <section className="herbs-baibu">
          <div className="herbs-details06">
            <div className="herbs-herbs06">
              <img
                alt="pastedImage"
                src="/pastedimage-rasb-600h.png"
                className="herbs-pasted-image07"
              />
            </div>
            <p className="herbs-quote06">
              <span>百部</span>
              <br className="herbs-text070"></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>甘、苦，微溫，歸肺經。</span>
              <br className="herbs-text075"></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span> 潤肺止咳，殺蟲。</span>
            </p>
          </div>
        </section>
        <section className="herbs-bohe">
          <div className="herbs-details07">
            <p className="herbs-quote07">
              <span>薄荷</span>
              <br className="herbs-text081"></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>辛，涼。歸肺、肝經。</span>
              <br className="herbs-text086"></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span>疏散風熱，清利頭目，利咽，透疹，疏肝解鬱。</span>
              <br></br>
            </p>
            <div className="herbs-herbs07">
              <img
                alt="pastedImage"
                src="/pastedimage-g01b-500h.png"
                className="herbs-pasted-image08"
              />
            </div>
          </div>
        </section>
        <section className="herbs-fang">
          <div className="herbs-details08">
            <div className="herbs-herbs08">
              <img
                alt="pastedImage"
                src="/pastedimage-2fu-600h.png"
                className="herbs-pasted-image09"
              />
            </div>
            <p className="herbs-quote08">
              <span>防風</span>
              <br className="herbs-text093"></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>辛、甘，微溫。歸膀胱、肝、脾經。</span>
              <br className="herbs-text098"></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span>發表散風，勝濕止痛，止痙、止瀉。</span>
            </p>
          </div>
        </section>
        <section className="herbs-chen">
          <div className="herbs-details09">
            <p className="herbs-quote09">
              <span>陳皮</span>
              <br className="herbs-text104"></br>
              <br></br>
              <span>【性味歸經】</span>
              <br></br>
              <span>辛、苦，溫。歸脾、肺經。</span>
              <br className="herbs-text109"></br>
              <br></br>
              <span>【功效】</span>
              <br></br>
              <span>理氣健脾，燥濕化痰。</span>
              <br></br>
            </p>
            <div className="herbs-herbs09">
              <img alt="pastedImage" src="/pastedimage-x0s4-1200w.png" />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Herbs
