import Hero from "./Hero";
import About from "./About";
import ClientReview from "./ClientReview";
import Contect from "./Contect";
import { Footer } from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      {/*  TODO: What is the point of review? Experiences section would be more appropriate */}
      <ClientReview />
      <Contect />
      <Footer></Footer>
    </div>
  );
};

export default Home;
