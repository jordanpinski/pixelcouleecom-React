import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import Question from '../components/question'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>pixelcoulee.com</title>
        <meta property="og:title" content="pixelcoulee.com" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Low-cost Professional Websites for Service Companies
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Building &amp; Maintaining Websites for Your Business
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
            <div className="home-btn-group">
              <a href="#pricing" className="home-hero-button1 buttonFilled">
                Get Started
              </a>
              <a href="#faq" className="home-hero-button2 buttonFlat">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Our Key Features
              </h2>
              <span className="home-features-sub-heading bodyLarge">
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
            <div className="home-container03">
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
      <div id="pricing" className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">
              Choose the Right Plan for Your Business
            </h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Select a plan that suits your needs and budget to get started
                  with your professional website today.
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="home-pricing-card freePricingCard">
              <div className="home-container06">
                <h3 className="home-text36">Basic</h3>
                <span className="home-free-plan-description bodySmall">
                  Get started with a basic website
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">50</span>
                <span className="home-text40">/ month</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Website setup &amp; hosting</span>
                </div>
                <div className="home-container10">
                  <span className="home-text42">✔</span>
                  <span>
                    <span className="bodySmall">5 pages total</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text45">✔</span>
                  <span className="bodySmall">
                    Limited customization options
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text46">✔</span>
                  <span className="bodySmall">SEO optimization</span>
                </div>
                <div className="home-container13">
                  <span className="home-text47">✔</span>
                  <span className="bodySmall">
                    15 minutes maintenance/month
                  </span>
                </div>
                <div className="home-container14">
                  <span className="home-text48">✔</span>
                  <span className="bodySmall">Standard support</span>
                </div>
              </div>
              <Link to="/contact-us" className="home-navlink buttonOutline">
                Continue with Basic
              </Link>
            </div>
            <div className="home-pricing-card1 freePricingCard">
              <div className="home-container15">
                <h3 className="home-text49">Advanced</h3>
                <span className="home-free-plan-description1 bodySmall">
                  Get started with a basic website
                </span>
              </div>
              <div className="home-container16">
                <span className="home-text50">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price1">100</span>
                <span className="home-text53">/ month</span>
              </div>
              <div className="home-container17">
                <div className="home-container18">
                  <span className="home-text54">✔</span>
                  <span className="bodySmall">Website setup &amp; hosting</span>
                </div>
                <div className="home-container19">
                  <span className="home-text55">✔</span>
                  <span className="bodySmall">10 pages total</span>
                </div>
                <div className="home-container20">
                  <span className="home-text56">✔</span>
                  <span className="bodySmall">Blog included</span>
                </div>
                <div className="home-container21">
                  <span className="home-text57">✔</span>
                  <span className="bodySmall">
                    Limited customization options
                  </span>
                </div>
                <div className="home-container22">
                  <span className="home-text58">✔</span>
                  <span className="bodySmall">SEO optimization</span>
                </div>
                <div className="home-container23">
                  <span className="home-text59">✔</span>
                  <span className="bodySmall">
                    30 minutes maintenance/month
                  </span>
                </div>
                <div className="home-container24">
                  <span className="home-text60">✔</span>
                  <span className="bodySmall">1 blog article/month</span>
                </div>
                <div className="home-container25">
                  <span className="home-text61">✔</span>
                  <span className="bodySmall">Advanced support</span>
                </div>
              </div>
              <Link
                to="/contact-us"
                className="home-navlink1 buttonFilled buttonOutline"
              >
                <span>
                  <span className="home-text63">Continue with Advanced</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="home-pricing-card2 freePricingCard">
              <div className="home-container26">
                <h3 className="home-text65">Pro</h3>
                <span className="home-free-plan-description2 bodySmall">
                  Get started with a basic website
                </span>
              </div>
              <div className="home-container27">
                <span className="home-text66">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price2">200</span>
                <span className="home-text69">/ month</span>
              </div>
              <div className="home-container28">
                <div className="home-container29">
                  <span className="home-text70">✔</span>
                  <span className="bodySmall">Website setup &amp; hosting</span>
                </div>
                <div className="home-container30">
                  <span className="home-text71">✔</span>
                  <span>20 pages total</span>
                </div>
                <div className="home-container31">
                  <span className="home-text72">✔</span>
                  <span className="bodySmall">Blog included</span>
                </div>
                <div className="home-container32">
                  <span className="home-text73">✔</span>
                  <span className="bodySmall">
                    Limited customization options
                  </span>
                </div>
                <div className="home-container33">
                  <span className="home-text74">✔</span>
                  <span className="bodySmall">Basic SEO optimization</span>
                </div>
                <div className="home-container34">
                  <span className="home-text75">✔</span>
                  <span className="home-free-plan-features19">
                    2 blog articles/month
                  </span>
                </div>
                <div className="home-container35">
                  <span className="home-text76">✔</span>
                  <span className="home-free-plan-features20">
                    1 hour maintenance/month
                  </span>
                </div>
                <div className="home-container36">
                  <span className="home-text77">✔</span>
                  <span className="bodySmall">Priority support</span>
                </div>
              </div>
              <Link to="/contact-us" className="home-navlink2 buttonFilled">
                Continue with Pro
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Affordable Website Solutions for Your Business
          </h1>
          <span className="home-banner-sub-heading bodySmall">
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
      <div id="faq" className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container37">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text95 heading2">Common questions</h2>
              <span className="home-text96 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container38">
              <Question
                answer="We specialize in building and maintaining websites for service companies such as home services, small businesses, health &amp; wellness, and more."
                question="What services do you offer for service companies?"
              ></Question>
              <Question
                answer="Our low-cost monthly fee for website building and maintenance services ranges from $50 to $200 &amp; is designed to be affordable for service companies of all sizes."
                question="How much does your monthly fee cost?"
                rootClassName="question-root-class-name"
              ></Question>
              <Question
                answer="Yes, you can cancel your subscription at any time with no long-term commitments or hidden fees."
                question="Can I cancel my subscription at any time?"
              ></Question>
              <Question
                answer="Yes, we offer website hosting as part of our comprehensive website building and maintenance packages for service companies."
                question="Do you provide website hosting as part of your services?"
              ></Question>
              <Question
                answer="Getting started with our agency is easy! Simply contact us to discuss your website needs and we'll guide you through the process step by step."
                question="How do I get started with your agency?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
