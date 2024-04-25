import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-Us - pixelcoulee.com</title>
        <meta property="og:title" content="Contact-Us - pixelcoulee.com" />
      </Helmet>
      <Header></Header>
      <div className="contact-us-hero">
        <div className="heroContainer contact-us-hero1">
          <div className="contact-us-container1">
            <h1 className="contact-us-hero-heading heading1">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact-us-features">
        <div className="featuresContainer">
          <div className="contact-us-features1">
            <div className="contact-us-container2">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="contact-us-features-heading heading2">
                Our Key Features
              </h2>
              <span className="contact-us-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover the essential features that set us apart in
                      building and maintaining websites for service companies
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <form className="contact-us-form">
              <input type="text" placeholder="placeholder" className="input" />
            </form>
            <div className="contact-us-container3">
              <FeatureCard
                heading="Customized Website Design"
                subHeading="Tailored website design to showcase your unique services"
              ></FeatureCard>
              <FeatureCard
                heading="Mobile Responsive"
                subHeading="Optimized for mobile devices to reach a wider audience"
              ></FeatureCard>
              <FeatureCard
                heading="SEO Optimization"
                subHeading="Improve search engine visibility to attract more potential clients"
              ></FeatureCard>
              <FeatureCard
                heading="Ongoing Maintenance"
                subHeading="Regular updates and support to keep your website running smoothly"
              ></FeatureCard>
              <FeatureCard
                heading="Professional Copywriting"
                subHeading="Clear, engaging content that effectively communicates your message and engages visitors."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-banner">
        <div className="bannerContainer contact-us-banner1">
          <h1 className="contact-us-banner-heading heading2">
            Affordable Website Solutions for Your Business
          </h1>
          <span className="contact-us-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our agency specializes in creating and managing websites for
                  service companies such as home services, small businesses,
                  health &amp; wellness providers, and more. With our low-cost
                  monthly fee, you can have a professional online presence
                  without breaking the bank. Let us help you establish a strong
                  digital footprint and attract more customers.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ContactUs
