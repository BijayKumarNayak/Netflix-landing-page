import React from "react";
import "./styles/landingpage.css";
import Button from "@mui/material/Button";

function LandingPage() {
  return (
    <div id="main">
      <div className="homepage">
        <nav>
          <span style={{ marginRight: "auto" }}>
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt=""
            />
          </span>
          <div className="language">
            <i class="fa-solid fa-globe"></i> English{" "}
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <Button variant="contained" color="error" style={{ marginLeft: 15 }}>
            Login
          </Button>
        </nav>
        <div className="container">
          <div className="textabout">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>

            <form action="">
              {" "}
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="subscibe">
                <div className="search">
                  <input type="text" placeholder="Email address" />
                </div>

                <button className="start-btn">
                  Get Started<i class="fa-solid fa-chevron-right"></i>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div id="tv" className="container content">
        <div className="content-text" style={{ paddingRight: 20 }}>
          {" "}
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="content-image">
          {" "}
          <img
            className="tv-image"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
          <div className="tv-video">
            {" "}
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className="border"></div>

      <div id="download" className="container content">
        <div className="content-image">
          {" "}
          <img
            className="mobile-image"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className="download-detail">
            <div className="download-detail-image">
              <img
                className="item-image"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png "
                alt=""
              />
            </div>
            <div className="download-detail-text">
              <div className="download-detail-text-0">Stranger Things</div>
              <div className="download-detail-text-1">Downloading</div>
            </div>
            <div className="download-detail-animation"></div>
          </div>
        </div>

        <div className="content-text">
          <h1>Download your shows to watch offline.</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <div className="border"></div>

      <div id="wew" className="container content">
        {" "}
        <div className="content-text">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="content-image">
          {" "}
          <img
            className="everywhere-image"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
          />
          <div className="we-video ">
            {" "}
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className="border"></div>

      <div id="children" className="container content">
        <div className="content-image">
          {" "}
          <img
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
            alt=""
          />
        </div>

        <div className="content-text">
          <h1>Create profiles for children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
      <div className="border"></div>

      <div className="container">
        <div className="faq-content">
          <h1>Frequently Asked Questions</h1>
          <ul className="question-section">
            <li className="question">
              <button>
                What is Netflix?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. <br /> <br />
                  You can watch as much as you want, whenever you want, without
                  a single ad – all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </span>
              </div>
            </li>
            <li className="question">
              <button className="btn">
                How much does Netflix cost?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </span>
              </div>
            </li>
            <li className="question">
              <button className="btn">
                Where can I watch?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. <br />
                  <br />
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </span>
              </div>
            </li>
            <li className="question">
              <button className="btn">
                How do I cancel?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </span>
              </div>
            </li>
            <li className="question">
              <button className="btn">
                What can I watch on Netflix?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </span>
              </div>
            </li>
            <li className="question">
              <button className="btn">
                Is Netflix good for kids?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space. <br /> <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </span>
              </div>
            </li>
            <li className="question">
              <button className="btn">
                How much does Netflix cost?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
              <div className="faq-answer">
                <span>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </span>
              </div>
            </li>
          </ul>
          <form action="">
            {" "}
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="subscibe">
              <div className="search">
                <input type="text" placeholder="Email address" />
              </div>

              <button className="start-btn">
                Get Started<i class="fa-solid fa-chevron-right"></i>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border"></div>
      <div className="container">
        <div className="footer-content">
          <span className="footer-top">
            Questions?Call <span>000-800-919-1694</span>
          </span>
          <ul className="footer-ul">
            <li className="footer-li">
              <span>FAQ</span>
            </li>
            <li className="footer-li">
              <span>Help Centre</span>
            </li>
            <li className="footer-li">
              <span>Account</span>
            </li>
            <li className="footer-li">
              <span>Media Centre</span>
            </li>
            <li className="footer-li">
              <span>Investor Relations</span>
            </li>
            <li className="footer-li">
              <span>Jobs</span>
            </li>
            <li className="footer-li">
              <span>Way to watch</span>
            </li>
            <li className="footer-li">
              <span>Terms of use</span>
            </li>
            <li className="footer-li">
              <span>Privacy</span>
            </li>
            <li className="footer-li">
              <span>Cookie perfermance</span>
            </li>
            <li className="footer-li">
              <span>Corporate information</span>
            </li>
            <li className="footer-li">
              <span>Contact us</span>
            </li>
            <li className="footer-li">
              <span>Speed test</span>
            </li>
            <li className="footer-li">
              <span>Legal notice</span>
            </li>
            <li className="footer-li">
              <span>Only on netflix</span>
            </li>
          </ul>
          <div className="language">
            <i class="fa-solid fa-globe"></i> English{" "}
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
