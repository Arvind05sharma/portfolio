import React, { Fragment } from "react";
import Slider from "react-slick";
import imagea from "../../assets/images/slid/sildera.jpg";
import imageb from "../../assets/images/slid/sliderb.jpg";
import imagec from "../../assets/images/slid/slidec.jpg";

import { Col, Row } from "reactstrap";

function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Fragment>
      <div className=" tg-bannerholder">
        <div className="tg-slidercontent">
          <div className="container px-0 mx-0">
            <div className="row px-0 mx-0">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 px-0 mx-0">
                <h1>
                  Dont't worry if your code doesn't work right. If everything
                  did, you'd be out of a job !
                </h1>
                <div className="tg-desc-container">
                  <h2>Hey, I am a REACT.JS | NEXT.JS - Web developer</h2>
                  <h2>from India </h2>
                </div>
                <div className="tg-detailcontent">
                  <Row>
                    <Col xs="6" sm="4">
                      <h5>sharma1997arvind@gmail.com</h5>
                    </Col>
                    <Col xs="6" sm="4">
                      <h5>+91-7004811010 | +91-8651586737</h5>
                    </Col>
                    <Col xs="6" sm="4">
                      <button className="tg-chat-button">Let's Talk</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          <div>
            <img src={imagea} alt="slider" className="homePageSlider" />
          </div>
          <div>
            <img src={imageb} alt="slider" className="homePageSlider" />
          </div>
          <div>
            <img src={imagec} alt="slider" className="homePageSlider" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80" alt="slider" className="homePageSlider" />
          </div>
        </Slider>
      </div>
    </Fragment>
  );
}
export default LandingPage;
