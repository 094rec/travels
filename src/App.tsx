import {
  Navbar,
  Hero,
  Footer,
  Memory,
  Explore,
  Pricing,
  Advertise,
  Banner,
} from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data/travdata";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero {...hero} />
      <Memory {...memory} />
      <Explore places={placesAPI} />
      <Advertise brands={brands} />
      <Pricing {...pricingapi} />
      <Banner {...bannerAPI} />
      <Footer {...footerAPI} />
    </>
  );
};

export default App;
