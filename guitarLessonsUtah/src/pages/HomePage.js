import SecAbout from "./sections/SecAbout";
import SecContact from "./sections/SecContact";
import SecFooter from "./sections/SecFooter";
import SecGuitarStyles from "./sections/SecGuitarStyles";
import SecHero from "./sections/SecHero";
import SecLocations from "./sections/SecLocations";
import SecSubHero from "./sections/SecSubHero";
import SecTestimonials from "./sections/SecTestimonials";

const HomePage = () => {
  return (
    <>
      <SecHero />
      <SecSubHero />
      <SecAbout />
      <SecGuitarStyles />
      <SecLocations />
      <SecTestimonials />
      <SecContact />
      <SecFooter />
    </>
  );
};

export default HomePage;
