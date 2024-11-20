import { Helmet } from "react-helmet";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import HowItWorks from "./HowItWorks";
import MakeADefferent from "./MakeADefferent";
import WhatPeoapleSay from "./WhatPeopleSay";

function Home() {
  return (
    <div className="container mx-auto  px-2">
      {/* title for this page */}
      <Helmet>
        <title>CozyAid | Winter Warmth Drive</title>
      </Helmet>
      {/* All sections */}
      <Banner />
      <AboutUs />
      <HowItWorks />
      <WhatPeoapleSay />
      <MakeADefferent />
    </div>
  );
}

export default Home;
