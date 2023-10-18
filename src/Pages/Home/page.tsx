import { Fragment, useState } from "react";
import Image from "next/image";
import whyus from "../../Assets/Images/why-us.jpg";
import { Row, Col, Carousel, CarouselIndicators } from "reactstrap";
import boxImg from "../../Assets/Images/z4584659776271_b9432009959b91d1aa7e6348de292f76.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faObjectGroup } from "@fortawesome/free-regular-svg-icons";
import {
  faDiamond,
  faLanguage,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import pricingImage from "../../Assets/Images/z2438745269455_57b138292b8e62d380488d442cfb103f.jpg";
import Faq from "./Faq";
import Clients from "./Clients";
import CallToAction from "./CallToAction";
import Whyus from "./WhyUs";
import Service from "./Service";
import About from "./About";
import Background from "./Background";
function LandingPage() {
  return (
    <Fragment>
      <Background />

      <About />

      <Service />

      <Whyus />

      <CallToAction />
      <Clients />
      <Faq />
    </Fragment>
  );
}

export default LandingPage;
