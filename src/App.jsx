import "./app.css"

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <p className="navbar-page">Clarity</p>
            <ul className="navbar-menus">
              <li>
                <a className="menus-descreption" href="">Home</a>
              </li>
              <li>
                <a className="menus-descreption" href="">About</a>
              </li>
              <li>
                <a className="menus-descreption" href="">Services</a>
              </li>
              <li>
                <a className="menus-descreption" href="">Portfolio</a>
              </li>
              <li>
                <a className="menus-descreption" href="">Team</a>
              </li>
              <li>
                <a className="menus-descreption" href="">Dropdown</a>
              </li>
              <li>
                <a className="menus-descreption" href="">Contact</a>
              </li>
            </ul>
            <button className="navbar-menus-button">
              <p className="navbar-menus-button-descreption">Get Started</p>
            </button>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="hero">
              <div>
                <h1 className="hero-page">Transform Your <br /> Digital Presence</h1>
                <p className="hero-descreption">We create innovative digital solutions that drive growth and  <br /> elevate your brand. From web development to digital marketing, <br /> we're your partners in digital transformation.</p>
                <div className="hero-btns">
                  <button className="hero-button1">
                    Get Started
                  </button>
                  <button className="hero-button2">
                    Our Work
                  </button>
                </div>
                <div>
                  <div className="hero-cards">
                    <div className="hero-card">
                      <h1 className="hero-card-page">150</h1>
                      <p className="hero-card-descreption">Projects Completed</p>
                    </div>
                    <div className="hero-card">
                      <h1 className="hero-card-page">95</h1>
                      <p className="hero-card-descreption">Client Satisfaction</p>
                    </div>
                    <div className="hero-card">
                      <h1 className="hero-card-page">24</h1>
                      <p className="hero-card-descreption">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
              <div >
                <img className="hero-image" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/misc/misc-16.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="about-cards">
              <div>
                <h4 className="about-name">Discover Our Story</h4>
                <h1 className="about-page">Innovative Solutions for a <br /> Digital-First World</h1>
                <p className="about-descreption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div>
                  <p className="about-desc">Excepteur sint occaecat cupidatat non proident.</p>
                  <p className="about-desc">Nemo enim ipsam voluptatem quia voluptas sit.</p>
                  <p className="about-desc">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
                <button className="about-button">
                  Discover More
                </button>
              </div>
              <div className="about-img">
                <img className="about-image" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/about/about-square-8.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="service-info">
              <h1 className="service-name">Services</h1>
              <p className="service-descreption">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="service-cards">
              <div className="service-card">
                <div className="service-card-image">
                  <img className="service-card-img" src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png" alt="rasm" />
                </div>
                <h1 className="service-card-page">Brand Identity Design</h1>
                <p className="service-card-descreption">Mauris blandit aliquet elit eget tincidunt <br /> nibh pulvinar rutrum tellus pellentesque eu.</p>
                <button className="service-card-btn">
                  Learn More →
                </button>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img className="service-card-img" src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png" alt="rasm" />
                </div>
                <h1 className="service-card-page">UI/UX Design</h1>
                <p className="service-card-descreption">Vestibulum ante ipsum primis in faucibus <br /> orci luctus et ultrices posuere cubilia curae.</p>
                <button className="service-card-btn">
                  Learn More →
                </button>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img className="service-card-img" src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png" alt="rasm" />
                </div>
                <h1 className="service-card-page">Web Development</h1>
                <p className="service-card-descreption">Nulla facilisi morbi tempus iaculis urna id <br /> volutpat lacus laoreet non curabitur gravida.</p>
                <button className="service-card-btn">
                  Learn More →
                </button>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img className="service-card-img" src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png" alt="rasm" />
                </div>
                <h1 className="service-card-page">Mobile App Design</h1>
                <p className="service-card-descreption">Sed porttitor lectus nibh donec sollicitudin <br /> molestie malesuada proin eget tortor risus.</p>
                <button className="service-card-btn">
                  Learn More →
                </button>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img className="service-card-img" src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png" alt="rasm" />
                </div>
                <h1 className="service-card-page">Digital Marketing</h1>
                <p className="service-card-descreption">Sed porttitor lectus nibh donec sollicitudin <br /> molestie malesuada proin eget tortor risus.</p>
                <button className="service-card-btn">
                  Learn More →
                </button>
              </div>
              <div className="service-card">
                <div className="service-card-image">
                  <img className="service-card-img" src="https://img.icons8.com/ios11/512/FFFFFF/instagram-new.png" alt="rasm" />
                </div>
                <h1 className="service-card-page">SEO Optimization</h1>
                <p className="service-card-descreption">Curabitur arcu erat accumsan id imperdiet <br /> et porttitor at sem pellentesque habitant <br /> morbi.</p>
                <button className="service-card-btn">
                  Learn More →
                </button>
              </div>
            </div>
            <div>
              <div className="service-card2">
                <h1 className="service-card-page2">Ready to Transform Your Digital Presence?</h1>
                <p className="service-card-decreption2">Let's discuss your project and create something amazing together</p>
                <button className="service-card-btn">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="service-info">
              <h1 className="service-name">Portfolio</h1>
              <p className="service-descreption">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="portfolio-cards">
              <div class="card">
                <div class="card-image">
                  <img src="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-7.webp" alt="Project Image" />
                </div>
                <div class="card-content">
                  <div className="portfolio-first">
                    <button className="portfolio-card-btn">
                      WEB DESIGN
                    </button>
                    <div class="card-rating">
                      <div class="star"></div>
                      <span>4.9</span>
                    </div>
                  </div>
                  <h3 class="card-title">Smart Productivity App</h3>
                  <p class="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p>
                  <div class="card-tags">
                    <div class="card-tag">Flutter</div>
                    <div class="card-tag">Firebase</div>
                    <div class="card-tag">AI</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-8.webp" alt="Project Image" />
                </div>
                <div class="card-content">
                  <div className="portfolio-first">
                    <button className="portfolio-card-btn">
                      WEB DESIGN
                    </button>
                    <div class="card-rating">
                      <div class="star"></div>
                      <span>4.9</span>
                    </div>
                  </div>
                  <h3 class="card-title">Smart Productivity App</h3>
                  <p class="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p>
                  <div class="card-tags">
                    <div class="card-tag">Flutter</div>
                    <div class="card-tag">Firebase</div>
                    <div class="card-tag">AI</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-9.webp" alt="Project Image" />
                </div>
                <div class="card-content">
                  <div className="portfolio-first">
                    <button className="portfolio-card-btn">
                      WEB DESIGN
                    </button>
                    <div class="card-rating">
                      <div class="star"></div>
                      <span>4.9</span>
                    </div>
                  </div>
                  <h3 class="card-title">Smart Productivity App</h3>
                  <p class="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p>
                  <div class="card-tags">
                    <div class="card-tag">Flutter</div>
                    <div class="card-tag">Firebase</div>
                    <div class="card-tag">AI</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-cards2">
              <div class="card">
                <div class="card-image">
                  <img src="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-12.webp" alt="Project Image" />
                </div>
                <div class="card-content">
                  <div className="portfolio-first">
                    <button className="portfolio-card-btn">
                      WEB DESIGN
                    </button>
                    <div class="card-rating">
                      <div class="star"></div>
                      <span>4.9</span>
                    </div>
                  </div>
                  <h3 class="card-title">Smart Productivity App</h3>
                  <p class="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p>
                  <div class="card-tags">
                    <div class="card-tag">Flutter</div>
                    <div class="card-tag">Firebase</div>
                    <div class="card-tag">AI</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-10.webp" alt="Project Image" />
                </div>
                <div class="card-content">
                  <div className="portfolio-first">
                    <button className="portfolio-card-btn">
                      WEB DESIGN
                    </button>
                    <div class="card-rating">
                      <div class="star"></div>
                      <span>4.9</span>
                    </div>
                  </div>
                  <h3 class="card-title">Smart Productivity App</h3>
                  <p class="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p>
                  <div class="card-tags">
                    <div class="card-tag">Flutter</div>
                    <div class="card-tag">Firebase</div>
                    <div class="card-tag">AI</div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="https://bootstrapmade.com/content/demo/Clarity/assets/img/portfolio/portfolio-11.webp" alt="Project Image" />
                </div>
                <div class="card-content">
                  <div className="portfolio-first">
                    <button className="portfolio-card-btn">
                      WEB DESIGN
                    </button>
                    <div class="card-rating">
                      <div class="star"></div>
                      <span>4.9</span>
                    </div>
                  </div>
                  <h3 class="card-title">Smart Productivity App</h3>
                  <p class="card-text">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                  </p>
                  <div class="card-tags">
                    <div class="card-tag">Flutter</div>
                    <div class="card-tag">Firebase</div>
                    <div class="card-tag">AI</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="service-card2">
                <h1 className="service-card-page2">Ready to start your next project?</h1>
                <p className="service-card-decreption2">Let's work together to bring your digital vision to life</p>
                <div className="portfolio-btns">
                  <button className="portfolio-card-button">
                    Start a Project
                  </button>
                  <button className="portfolio-card-button2">
                    View All Work
                  </button>
                </div>
              </div>
            </div>
            <div className="service-info">
              <h1 className="why-name">Why Us</h1>
              <p className="service-descreption">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="why">
              <div>
                <img className="why-image" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/illustration/illustration-14.webp" alt="why" />
              </div>
              <div>
                <h1 className="why-page">Why Leading Brands Choose <br /> Us</h1>
                <p className="why-descreption">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br /> dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
                <div className="why-cards">
                  <div className="">
                    <h2 className="why-card-page">Strategic Thinking</h2>
                    <p className="why-card-descreption">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do <br /> eiusmod tempor incididunt.</p>
                  </div>
                  <div className="">
                    <h2 className="why-card-page">Data-Driven Approach</h2>
                    <p className="why-card-descreption">Ut enim ad minim veniam quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea.</p>
                  </div>
                  <div className="">
                    <h2 className="why-card-page">24/7 Support</h2>
                    <p className="why-card-descreption">Excepteur sint occaecat cupidatat non proident sunt in culpa <br /> qui officia deserunt mollit.</p>
                  </div>
                  
                </div>
                <div className="why-card-btns">
                  <button className="why-card-btn">
                    Start Your Project
                  </button>
                  <button className="why-card-btn2">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
            <div className="testimonal-info">
              <h1 className="testimonal-name">Testimonials</h1>
              <p className="testimonal-descreption">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="service-info">
              <h1 className="why-name">Team</h1>
              <p className="why-descreption">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="team-cards">
              <div>
                <div>
                  <h1 className="team-page">Meet Our Exceptional Team</h1>
                  <p className="team-descreption">Temporibus autem quibusdam et aut officiis debitis aut rerum <br /> necessitatibus saepe eveniet ut et voluptates repudiandae sint et <br /> molestiae non recusandae.</p>
                </div>
                <div>
                  <div className="hero-cards">
                    <div className="hero-card">
                      <h1 className="hero-card-page">50+</h1>
                      <p className="hero-card-descreption">Projects Completed</p>
                    </div>
                    <div className="hero-card">
                      <h1 className="hero-card-page">8</h1>
                      <p className="hero-card-descreption">Client Satisfaction</p>
                    </div>
                    <div className="hero-card">
                      <h1 className="hero-card-page">15+</h1>
                      <p className="hero-card-descreption">Team Memberss</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img className="team-card-img" src="https://bootstrapmade.com/content/demo/Clarity/assets/img/person/person-f-3.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;