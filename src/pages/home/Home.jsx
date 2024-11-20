import { Helmet } from "react-helmet";
import Banner from "../../components/Banner";

function Home() {
  return (
    <div className="container mx-auto  px-2">
      {/* title for this page */}
      <Helmet>
        <title>CozyAid | Winter Warmth Drive</title>
      </Helmet>
      <Banner />
    </div>
  );
}

export default Home;
